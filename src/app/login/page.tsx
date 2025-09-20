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

export default function LoginPage() {
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
                    <Input id="user-email" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="user-password">Password</Label>
                    <Input id="user-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
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
                    <Input id="trainer-email" type="email" placeholder="trainer@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainer-password">Password</Label>
                    <Input id="trainer-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
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
                    <Input id="admin-email" type="email" placeholder="admin@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <Input id="admin-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
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
