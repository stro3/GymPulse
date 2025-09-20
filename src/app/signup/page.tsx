'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Icons } from '@/components/icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useToast } from '@/hooks/use-toast';
import { signupUser } from '@/lib/actions';
import { Loader2 } from 'lucide-react';

export default function SignupPage() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // User state
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // Trainer state
  const [trainerFirstName, setTrainerFirstName] = useState('');
  const [trainerLastName, setTrainerLastName] = useState('');
  const [trainerEmail, setTrainerEmail] = useState('');
  const [trainerPassword, setTrainerPassword] = useState('');
  const [specialization, setSpecialization] = useState('');

  // Admin state
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');

  const handleSignup = async (role: 'user' | 'trainer' | 'admin') => {
    setIsLoading(true);
    let result;

    if (role === 'user') {
      result = await signupUser({
        role,
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      });
    } else if (role === 'trainer') {
      result = await signupUser({
        role,
        firstName: trainerFirstName,
        lastName: trainerLastName,
        email: trainerEmail,
        password: trainerPassword,
        specialization,
      });
    } else { // admin
      result = await signupUser({
        role,
        fullName: adminName,
        email: adminEmail,
        password: adminPassword,
        adminKey,
      });
    }

    if (result.success) {
      toast({ title: 'Signup Successful', description: 'Please log in to continue.' });
      router.push('/login');
    } else {
      toast({
        variant: 'destructive',
        title: 'Signup Failed',
        description: result.error,
      });
    }

    setIsLoading(false);
  };
  
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
       <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
            <div className="grid gap-2 text-center">
              <Link href="/" className="flex items-center justify-center gap-2 mb-4">
                <Icons.Logo className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">GymPulse</h1>
              </Link>
              <p className="text-balance text-muted-foreground">
                Create an account to get started
              </p>
            </div>
            <Tabs defaultValue="user" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="trainer">Trainer</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
              <TabsContent value="user">
                <Card>
                  <CardHeader>
                    <CardTitle>User Sign Up</CardTitle>
                    <CardDescription>Enter your information to create a user account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="user-first-name">First name</Label>
                        <Input id="user-first-name" placeholder="Max" required value={userFirstName} onChange={e => setUserFirstName(e.target.value)} />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="user-last-name">Last name</Label>
                        <Input id="user-last-name" placeholder="Robinson" required value={userLastName} onChange={e => setUserLastName(e.target.value)} />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input id="user-email" type="email" placeholder="m@example.com" required value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="user-password">Password</Label>
                      <Input id="user-password" type="password" required value={userPassword} onChange={e => setUserPassword(e.target.value)} />
                    </div>
                    <Button onClick={() => handleSignup('user')} disabled={isLoading} className="w-full">
                       {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Create account
                    </Button>
                     <Button variant="outline" className="w-full" disabled>
                      Sign up with Google
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="trainer">
                <Card>
                  <CardHeader>
                    <CardTitle>Trainer Sign Up</CardTitle>
                    <CardDescription>Register as a trainer to manage clients and classes.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="trainer-first-name">First name</Label>
                        <Input id="trainer-first-name" placeholder="John" required value={trainerFirstName} onChange={e => setTrainerFirstName(e.target.value)}/>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="trainer-last-name">Last name</Label>
                        <Input id="trainer-last-name" placeholder="Smith" required value={trainerLastName} onChange={e => setTrainerLastName(e.target.value)}/>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="trainer-email">Email</Label>
                      <Input id="trainer-email" type="email" placeholder="trainer@example.com" required value={trainerEmail} onChange={e => setTrainerEmail(e.target.value)}/>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="trainer-password">Password</Label>
                      <Input id="trainer-password" type="password" required value={trainerPassword} onChange={e => setTrainerPassword(e.target.value)} />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input id="specialization" placeholder="e.g. Yoga, Weightlifting" required value={specialization} onChange={e => setSpecialization(e.target.value)}/>
                    </div>
                    <Button onClick={() => handleSignup('trainer')} disabled={isLoading} className="w-full">
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Create trainer account
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="admin">
                <Card>
                  <CardHeader>
                    <CardTitle>Admin Registration</CardTitle>
                    <CardDescription>Create a new administrative account.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                     <div className="grid gap-2">
                      <Label htmlFor="admin-name">Full Name</Label>
                      <Input id="admin-name" placeholder="Admin User" required value={adminName} onChange={e => setAdminName(e.target.value)}/>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input id="admin-email" type="email" placeholder="admin@example.com" required value={adminEmail} onChange={e => setAdminEmail(e.target.value)}/>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input id="admin-password" type="password" required value={adminPassword} onChange={e => setAdminPassword(e.target.value)} />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="admin-key">Admin Key</Label>
                      <Input id="admin-key" type="password" placeholder="Secret Key" required value={adminKey} onChange={e => setAdminKey(e.target.value)} />
                    </div>
                    <Button onClick={() => handleSignup('admin')} disabled={isLoading} className="w-full">
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Register Admin
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Log in
              </Link>
            </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            layout="fill"
            objectFit="cover"
            data-ai-hint={bgImage.imageHint}
          />
        )}
      </div>
    </div>
  );
}
