import React from 'react';
import { estimateStateOptimisticCapacity } from '../features/state-estimate-optimistic-capacity';

type StateEstimateOptimisticCapacityCardProps = { values: readonly number[]; label?: string };
export function StateEstimateOptimisticCapacityCard({ values, label = 'capacity' }: StateEstimateOptimisticCapacityCardProps) {
  const value = estimateStateOptimisticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
