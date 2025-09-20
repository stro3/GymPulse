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
import { loginUser } from '@/lib/actions';
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [trainerEmail, setTrainerEmail] = useState('');
  const [trainerPassword, setTrainerPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleLogin = async (role: 'user' | 'trainer' | 'admin') => {
    setIsLoading(true);
    let email, password;
    switch(role) {
      case 'user':
        email = userEmail;
        password = userPassword;
        break;
      case 'trainer':
        email = trainerEmail;
        password = trainerPassword;
        break;
      case 'admin':
        email = adminEmail;
        password = adminPassword;
        break;
    }

    const result = await loginUser({ email, password, role });

    if (result.success) {
      toast({ title: 'Login Successful', description: 'Redirecting to your dashboard...' });
      router.push('/dashboard');
    } else {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
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
              Enter your credentials to access your account
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
                  <CardTitle>User Login</CardTitle>
                  <CardDescription>Welcome back! Please login to continue.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="user-email">Email</Label>
                    <Input id="user-email" type="email" placeholder="m@example.com" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <Input id="user-password" type="password" required value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
                  </div>
                  <Button onClick={() => handleLogin('user')} disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trainer">
              <Card>
                <CardHeader>
                  <CardTitle>Trainer Login</CardTitle>
                  <CardDescription>Access your trainer dashboard.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="trainer-email">Email</Label>
                    <Input id="trainer-email" type="email" placeholder="trainer@example.com" required value={trainerEmail} onChange={(e) => setTrainerEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-password">Password</Label>
                    <Input id="trainer-password" type="password" required value={trainerPassword} onChange={(e) => setTrainerPassword(e.target.value)} />
                  </div>
                   <Button onClick={() => handleLogin('trainer')} disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>Access the admin panel.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                    <Label htmlFor="admin-email">Email</Label>
                    <Input id="admin-email" type="email" placeholder="admin@example.com" required value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" required value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
                  </div>
                  <Button onClick={() => handleLogin('admin')} disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Login
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
           <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
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
