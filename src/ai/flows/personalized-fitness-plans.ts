'use server';

/**
 * @fileOverview A personalized fitness plan generator.
 *
 * - generatePersonalizedPlans - A function that generates personalized workout and nutrition plans.
 * - PersonalizedPlansInput - The input type for the generatePersonalizedPlans function.
 * - PersonalizedPlansOutput - The return type for the generatePersonalizedPlans function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPlansInputSchema = z.object({
  name: z.string().describe('The user\'s name.'),
  age: z.number().describe('The user\'s age.'),
  weight: z.number().describe('The user\'s weight in kilograms.'),
  height: z.number().describe('The user\'s height in centimeters.'),
  fitnessGoals: z.string().describe('The user\'s fitness goals.'),
  workoutPreferences: z.string().describe('The user\'s preferred workout types.'),
  dietaryPreferences: z
    .string()
    .describe('The user\'s dietary preferences and restrictions.'),
  gymEquipmentAccess: z.string().describe('The gym equipment the user has access to.'),
});
export type PersonalizedPlansInput = z.infer<typeof PersonalizedPlansInputSchema>;

const PersonalizedPlansOutputSchema = z.object({
  workoutPlan: z.string().describe('The personalized workout plan.'),
  nutritionPlan: z.string().describe('The personalized nutrition plan.'),
  equipmentRecommendations: z
    .string()
    .describe('Recommendations for gym equipment based on the user\'s profile and goals.'),
});
export type PersonalizedPlansOutput = z.infer<typeof PersonalizedPlansOutputSchema>;

export async function generatePersonalizedPlans(
  input: PersonalizedPlansInput
): Promise<PersonalizedPlansOutput> {
  return personalizedPlansFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPlansPrompt',
  input: {schema: PersonalizedPlansInputSchema},
  output: {schema: PersonalizedPlansOutputSchema},
  prompt: `You are a personal fitness and nutrition expert.

  Based on the user's profile and fitness goals, generate a personalized workout plan, a nutrition plan, and gym equipment recommendations.

  User Profile:
  Name: {{{name}}}
  Age: {{{age}}}
  Weight: {{{weight}}} kg
  Height: {{{height}}} cm
  Fitness Goals: {{{fitnessGoals}}}
  Workout Preferences: {{{workoutPreferences}}}
  Dietary Preferences: {{{dietaryPreferences}}}
  Gym Equipment Access: {{{gymEquipmentAccess}}}

  Workout Plan:
  Nutrition Plan:
  Equipment Recommendations: `,
});

const personalizedPlansFlow = ai.defineFlow(
  {
    name: 'personalizedPlansFlow',
    inputSchema: PersonalizedPlansInputSchema,
    outputSchema: PersonalizedPlansOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
