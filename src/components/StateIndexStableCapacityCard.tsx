import React from 'react';
import { indexStateStableCapacity } from '../features/state-index-stable-capacity';

type StateIndexStableCapacityCardProps = { values: readonly number[]; label?: string };
export function StateIndexStableCapacityCard({ values, label = 'capacity' }: StateIndexStableCapacityCardProps) {
  const value = indexStateStableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
