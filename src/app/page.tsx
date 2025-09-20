import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Icons } from '@/components/icons';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'gym-hero');

  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 sm:p-6">
        <div className="flex items-center gap-2">
          <Icons.Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold tracking-tighter text-foreground">
            GymPulse
          </h1>
        </div>
        <Button asChild>
          <Link href="/dashboard">
            Go to Dashboard <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </header>
      <main className="flex-1">
        <section className="relative h-screen w-full">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-4">
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
      </main>
    </div>
  );
}
