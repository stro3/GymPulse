import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Star, Dumbbell, Zap, Users } from 'lucide-react';
import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'gym-hero');
  const featuresImage = PlaceHolderImages.find((img) => img.id === 'features-splash');
  const ctaImage = PlaceHolderImages.find((img) => img.id === 'cta-splash');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Icons.Logo className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">
                GymPulse
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center gap-4 text-sm">
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">
                    Sign Up <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
                  Unleash Your Potential
                </h1>
                <p className="text-lg text-foreground/80 md:text-xl">
                  GymPulse provides AI-powered personalized fitness plans to help
                  you achieve your goals faster. Track your progress, book classes,
                  and stay motivated.
                </p>
                <Button asChild size="lg" className="mt-6">
                  <Link href="/dashboard">
                    Get Your AI Plan
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-headline text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              This project is an experiment to see how a modern app, with features like auth, subscriptions, and AI, can be built quickly with open source components.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Dumbbell /> Personalized AI Plans
                </CardTitle>
              </CardHeader>
              <CardContent>
                Get workout and nutrition plans tailored to your body and goals, powered by generative AI.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap /> Progress Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                Monitor your gains, track your weight, and visualize your fitness journey with our intuitive charts.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users /> Community & Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                Book classes, join fitness challenges, and connect with other members of the GymPulse community.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-8 md:py-12 lg:py-24">
           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-headline text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Loved by Fitness Enthusiasts
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                </div>
                <p className="mb-4">"The AI planner is a game-changer! I've never been more consistent with my workouts."</p>
                <p className="font-semibold">- Sarah J.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                 <div className="flex mb-4">
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                </div>
                <p className="mb-4">"Booking classes is so easy, and I love the community features. Highly recommended!"</p>
                <p className="font-semibold">- Mike R.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                 <div className="flex mb-4">
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-muted-foreground" />
                </div>
                <p className="mb-4">"A fantastic app for anyone serious about their fitness. The progress tracking is super motivating."</p>
                <p className="font-semibold">- Emily W.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="container py-8 md:py-12 lg:py-24">
            <div className="relative overflow-hidden rounded-lg">
              {ctaImage && (
                <Image
                  src={ctaImage.imageUrl}
                  alt={ctaImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={ctaImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gray-900/60" />
              <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center text-white">
                <h2 className="font-headline text-3xl md:text-5xl">Ready to Start Your Journey?</h2>
                <p className="mt-4 max-w-xl text-lg">
                  Join thousands of users who are transforming their bodies and lives with GymPulse.
                </p>
                <Button asChild size="lg" className="mt-6">
                  <Link href="/signup">
                    Sign Up for Free
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

       {/* Footer */}
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Icons.Logo className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose md:text-left">
              Built by you. Powered by AI.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} GymPulse, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
