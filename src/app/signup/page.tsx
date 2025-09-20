import Image from 'next/image';
import Link from 'next/link';
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


export default function SignupPage() {
  const bgImage = PlaceHolderImages.find(img => img.id === 'login-background');
  
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
                        <Input id="user-first-name" placeholder="Max" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="user-last-name">Last name</Label>
                        <Input id="user-last-name" placeholder="Robinson" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input id="user-email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="user-password">Password</Label>
                      <Input id="user-password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">Create account</Button>
                     <Button variant="outline" className="w-full">
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
                        <Input id="trainer-first-name" placeholder="John" required />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="trainer-last-name">Last name</Label>
                        <Input id="trainer-last-name" placeholder="Smith" required />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="trainer-email">Email</Label>
                      <Input id="trainer-email" type="email" placeholder="trainer@example.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="trainer-password">Password</Label>
                      <Input id="trainer-password" type="password" required />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input id="specialization" placeholder="e.g. Yoga, Weightlifting" required />
                    </div>
                    <Button type="submit" className="w-full">Create trainer account</Button>
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
                      <Input id="admin-name" placeholder="Admin User" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="admin-email">Email</Label>
                      <Input id="admin-email" type="email" placeholder="admin@example.com" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="admin-password">Password</Label>
                      <Input id="admin-password" type="password" required />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="admin-key">Admin Key</Label>
                      <Input id="admin-key" type="password" placeholder="Secret Key" required />
                    </div>
                    <Button type="submit" className="w-full">Register Admin</Button>
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
