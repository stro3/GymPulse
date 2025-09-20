'use server';

import { generatePersonalizedPlans, type PersonalizedPlansInput } from "@/ai/flows/personalized-fitness-plans";
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export async function getPersonalizedPlans(input: PersonalizedPlansInput) {
    try {
        const result = await generatePersonalizedPlans(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error generating personalized plans:", error);
        return { success: false, error: "Failed to generate fitness plan. Please try again." };
    }
}

// Define a union type for all possible signup inputs
type SignupInput = 
  | { role: 'user'; firstName: string; lastName: string; email: string; password: string }
  | { role: 'trainer'; firstName: string; lastName: string; email: string; password: string; specialization: string }
  | { role: 'admin'; fullName: string; email: string; password: string; adminKey: string };

export async function signupUser(input: SignupInput) {
    try {
        // Admin key check for admin registration
        if (input.role === 'admin' && input.adminKey !== process.env.ADMIN_SECRET_KEY) {
            return { success: false, error: 'Invalid Admin Key.' };
        }

        const userCredential = await createUserWithEmailAndPassword(auth, input.email, input.password);
        const user = userCredential.user;

        let userData: any = {
            uid: user.uid,
            email: user.email,
            role: input.role,
        };

        if (input.role === 'user') {
            userData = { ...userData, firstName: input.firstName, lastName: input.lastName };
        } else if (input.role === 'trainer') {
            userData = { ...userData, firstName: input.firstName, lastName: input.lastName, specialization: input.specialization };
        } else if (input.role === 'admin') {
            userData = { ...userData, fullName: input.fullName };
        }

        await setDoc(doc(db, 'users', user.uid), userData);

        return { success: true, userId: user.uid };
    } catch (error: any) {
        console.error("Error signing up:", error);
        return { success: false, error: error.message || 'An unknown error occurred.' };
    }
}

interface LoginInput {
  email: string;
  password: string;
  role: 'user' | 'trainer' | 'admin';
}

export async function loginUser(input: LoginInput) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, input.email, input.password);
    const user = userCredential.user;

    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (!userDoc.exists() || userDoc.data().role !== input.role) {
      // Sign out the user if role doesn't match
      await auth.signOut();
      return { success: false, error: `No ${input.role} account found with these credentials.` };
    }

    return { success: true, userId: user.uid };
  } catch (error: any) {
    console.error("Error logging in:", error);
    return { success: false, error: error.message || 'An unknown error occurred.' };
  }
}
