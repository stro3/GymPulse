'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import type { PersonalizedPlansOutput } from '@/ai/flows/personalized-fitness-plans';
import { ClipboardList, AlertCircle, Apple, Dumbbell } from 'lucide-react';

interface PlanDisplayProps {
  plan: PersonalizedPlansOutput | null;
  isLoading: boolean;
  error: string | null;
}

function FormattedContent({ content }: { content: string }) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none text-card-foreground/90">
      {content.split('\n').map((paragraph, index) => {
        if (paragraph.trim() === '') return null;
        return (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

function PlanSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

export function PlanDisplay({ plan, isLoading, error }: PlanDisplayProps) {
  if (isLoading) {
    return (
      <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader><CardTitle><div className="flex items-center gap-2"><ClipboardList/> Workout Plan</div></CardTitle></CardHeader>
          <CardContent><PlanSkeleton /></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle><div className="flex items-center gap-2"><Apple /> Nutrition Plan</div></CardTitle></CardHeader>
          <CardContent><PlanSkeleton /></CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle><div className="flex items-center gap-2"><Dumbbell /> Equipment Recommendations</div></CardTitle></CardHeader>
          <CardContent><PlanSkeleton /></CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="mt-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!plan) {
    return null;
  }

  return (
    <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <ClipboardList />
              <span>Workout Plan</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormattedContent content={plan.workoutPlan} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <Apple />
              <span>Nutrition Plan</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormattedContent content={plan.nutritionPlan} />
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-2">
              <Dumbbell />
              <span>Equipment Recommendations</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormattedContent content={plan.equipmentRecommendations} />
        </CardContent>
      </Card>
    </div>
  );
}
