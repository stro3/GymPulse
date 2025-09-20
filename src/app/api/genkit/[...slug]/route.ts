import {defineNextHandler} from '@genkit-ai/next';
import '@/ai/flows/personalized-fitness-plans';

// This is the Genkit API route handler for Next.js App Router.
export const {GET, POST} = defineNextHandler();
