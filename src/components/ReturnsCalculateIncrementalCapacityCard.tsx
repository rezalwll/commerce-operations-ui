import React from 'react';
import { calculateReturnsIncrementalCapacity } from '../features/returns-calculate-incremental-capacity';

type ReturnsCalculateIncrementalCapacityCardProps = { values: readonly number[]; label?: string };
export function ReturnsCalculateIncrementalCapacityCard({ values, label = 'capacity' }: ReturnsCalculateIncrementalCapacityCardProps) {
  const value = calculateReturnsIncrementalCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
