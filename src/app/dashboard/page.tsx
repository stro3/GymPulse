'use client';

import { useState } from 'react';
import type { PersonalizedPlansInput, PersonalizedPlansOutput } from '@/ai/flows/personalized-fitness-plans';
import { getPersonalizedPlans } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { DashboardHeader } from '@/components/dashboard/header';
import { PersonalizedPlanForm } from '@/components/dashboard/personalized-plan-form';
import { PlanDisplay } from '@/components/dashboard/plan-display';
import { BmiCalculator } from '@/components/dashboard/bmi-calculator';

export default function DashboardPage() {
  const [plan, setPlan] = useState<PersonalizedPlansOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFormSubmit = async (data: PersonalizedPlansInput) => {
    setIsLoading(true);
    setError(null);
    setPlan(null);

    const result = await getPersonalizedPlans(data);

    if (result.success && result.data) {
      setPlan(result.data);
      toast({
        title: 'Success!',
        description: 'Your personalized fitness plan has been generated.',
      });
    } else {
      setError(result.error || 'An unknown error occurred.');
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error || 'Failed to generate plan.',
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <DashboardHeader title="Dashboard" />
      <main className="grid flex-1 items-start gap-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <PersonalizedPlanForm onFormSubmit={handleFormSubmit} isLoading={isLoading} />
          <PlanDisplay plan={plan} isLoading={isLoading} error={error} />
        </div>
        <div className="grid auto-rows-max items-start gap-4 md:gap-8">
          <BmiCalculator />
        </div>
      </main>
    </div>
  );
}
