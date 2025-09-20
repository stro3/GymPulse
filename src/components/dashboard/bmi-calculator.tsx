'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [categoryColor, setCategoryColor] = useState('');

  const calculateBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      const calculatedBmi = w / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setBmiCategory('Underweight');
        setCategoryColor('text-blue-500');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        setBmiCategory('Normal weight');
        setCategoryColor('text-green-500');
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        setBmiCategory('Overweight');
        setCategoryColor('text-yellow-500');
      } else {
        setBmiCategory('Obesity');
        setCategoryColor('text-red-500');
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
        <CardDescription>Assess your Body Mass Index.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" placeholder="e.g., 70" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" placeholder="e.g., 175" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <Button onClick={calculateBmi} className="w-full">Calculate BMI</Button>
          {bmi !== null && (
            <div className="text-center pt-4">
              <p className="text-muted-foreground">Your BMI is</p>
              <p className="text-4xl font-bold">{bmi.toFixed(1)}</p>
              <p className={`font-semibold ${categoryColor}`}>{bmiCategory}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
