import React from 'react';
import { prioritizeStatePredictiveCapacity } from '../features/state-prioritize-predictive-capacity';

type StatePrioritizePredictiveCapacityCardProps = { values: readonly number[]; label?: string };
export function StatePrioritizePredictiveCapacityCard({ values, label = 'capacity' }: StatePrioritizePredictiveCapacityCardProps) {
  const value = prioritizeStatePredictiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
