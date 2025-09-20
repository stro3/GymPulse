'use server';

import { generatePersonalizedPlans, type PersonalizedPlansInput } from "@/ai/flows/personalized-fitness-plans";

export async function getPersonalizedPlans(input: PersonalizedPlansInput) {
    try {
        const result = await generatePersonalizedPlans(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error generating personalized plans:", error);
        return { success: false, error: "Failed to generate fitness plan. Please try again." };
    }
}
