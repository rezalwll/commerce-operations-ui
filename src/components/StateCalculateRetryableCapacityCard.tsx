import React from 'react';
import { calculateStateRetryableCapacity } from '../features/state-calculate-retryable-capacity';

type StateCalculateRetryableCapacityCardProps = { values: readonly number[]; label?: string };
export function StateCalculateRetryableCapacityCard({ values, label = 'capacity' }: StateCalculateRetryableCapacityCardProps) {
  const value = calculateStateRetryableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
