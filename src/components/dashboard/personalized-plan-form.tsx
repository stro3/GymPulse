'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import type { PersonalizedPlansInput } from '@/ai/flows/personalized-fitness-plans';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  age: z.coerce.number().min(12, { message: 'You must be at least 12 years old.' }).max(100),
  weight: z.coerce.number().min(30, { message: 'Weight must be a positive number.' }),
  height: z.coerce.number().min(100, { message: 'Height must be a positive number.' }),
  fitnessGoals: z.string().min(1, { message: 'Please select a fitness goal.' }),
  workoutPreferences: z.string().min(10, { message: 'Please describe your workout preferences.' }),
  dietaryPreferences: z.string().min(10, { message: 'Please describe your dietary preferences.' }),
  gymEquipmentAccess: z.string().min(5, { message: 'Please list available equipment.' }),
});

interface PersonalizedPlanFormProps {
  onFormSubmit: (data: PersonalizedPlansInput) => Promise<void>;
  isLoading: boolean;
}

export function PersonalizedPlanForm({ onFormSubmit, isLoading }: PersonalizedPlanFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: 25,
      weight: 70,
      height: 175,
      fitnessGoals: '',
      workoutPreferences: '',
      dietaryPreferences: '',
      gymEquipmentAccess: 'Basic gym equipment (dumbbells, treadmill, bench)',
    },
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI-Powered Fitness Planner</CardTitle>
        <CardDescription>
          Fill out your details below and our AI will generate a personalized workout and nutrition plan for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Height (cm)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                  control={form.control}
                  name="fitnessGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Primary Fitness Goal</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a goal" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Weight Loss">Weight Loss</SelectItem>
                          <SelectItem value="Muscle Gain">Muscle Gain</SelectItem>
                          <SelectItem value="Cardiovascular Health">Cardiovascular Health</SelectItem>
                          <SelectItem value="General Fitness">General Fitness</SelectItem>
                           <SelectItem value="Improve Strength">Improve Strength</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="workoutPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Workout Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., I enjoy HIIT, weightlifting, and some yoga. I can work out 3-4 times a week."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dietaryPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Preferences & Restrictions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Vegetarian, gluten-free, allergic to nuts."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="gymEquipmentAccess"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gym Equipment Access</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Full gym access, or just dumbbells and a yoga mat at home."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate My Plan
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
