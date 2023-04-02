import React from 'react';
import { calculateAnalyticsIncrementalCapacity } from '../features/analytics-calculate-incremental-capacity';

type AnalyticsCalculateIncrementalCapacityCardProps = { values: readonly number[]; label?: string };
export function AnalyticsCalculateIncrementalCapacityCard({ values, label = 'capacity' }: AnalyticsCalculateIncrementalCapacityCardProps) {
  const value = calculateAnalyticsIncrementalCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
