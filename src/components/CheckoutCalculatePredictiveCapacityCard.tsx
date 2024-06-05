import React from 'react';
import { calculateCheckoutPredictiveCapacity } from '../features/checkout-calculate-predictive-capacity';

type CheckoutCalculatePredictiveCapacityCardProps = { values: readonly number[]; label?: string };
export function CheckoutCalculatePredictiveCapacityCard({ values, label = 'capacity' }: CheckoutCalculatePredictiveCapacityCardProps) {
  const value = calculateCheckoutPredictiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
