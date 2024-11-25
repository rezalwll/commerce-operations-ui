import React from 'react';
import { calculatePricingSemanticCapacity } from '../features/pricing-calculate-semantic-capacity';

type PricingCalculateSemanticCapacityCardProps = { values: readonly number[]; label?: string };
export function PricingCalculateSemanticCapacityCard({ values, label = 'capacity' }: PricingCalculateSemanticCapacityCardProps) {
  const value = calculatePricingSemanticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
