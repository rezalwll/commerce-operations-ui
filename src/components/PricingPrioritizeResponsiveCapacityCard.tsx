import React from 'react';
import { prioritizePricingResponsiveCapacity } from '../features/pricing-prioritize-responsive-capacity';

type PricingPrioritizeResponsiveCapacityCardProps = { values: readonly number[]; label?: string };
export function PricingPrioritizeResponsiveCapacityCard({ values, label = 'capacity' }: PricingPrioritizeResponsiveCapacityCardProps) {
  const value = prioritizePricingResponsiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
