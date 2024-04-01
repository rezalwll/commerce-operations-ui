import React from 'react';
import { calculateReportsOptimisticCapacity } from '../features/reports-calculate-optimistic-capacity';

type ReportsCalculateOptimisticCapacityCardProps = { values: readonly number[]; label?: string };
export function ReportsCalculateOptimisticCapacityCard({ values, label = 'capacity' }: ReportsCalculateOptimisticCapacityCardProps) {
  const value = calculateReportsOptimisticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
