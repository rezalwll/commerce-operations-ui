import React from 'react';
import { schedulePricingMemoizedCapacity } from '../features/pricing-schedule-memoized-capacity';

type PricingScheduleMemoizedCapacityCardProps = { values: readonly number[]; label?: string };
export function PricingScheduleMemoizedCapacityCard({ values, label = 'capacity' }: PricingScheduleMemoizedCapacityCardProps) {
  const value = schedulePricingMemoizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
