import React from 'react';
import { calculateSearchScopedCapacity } from '../features/search-calculate-scoped-capacity';

type SearchCalculateScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function SearchCalculateScopedCapacityCard({ values, label = 'capacity' }: SearchCalculateScopedCapacityCardProps) {
  const value = calculateSearchScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
