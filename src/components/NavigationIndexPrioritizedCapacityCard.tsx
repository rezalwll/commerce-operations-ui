import React from 'react';
import { indexNavigationPrioritizedCapacity } from '../features/navigation-index-prioritized-capacity';

type NavigationIndexPrioritizedCapacityCardProps = { values: readonly number[]; label?: string };
export function NavigationIndexPrioritizedCapacityCard({ values, label = 'capacity' }: NavigationIndexPrioritizedCapacityCardProps) {
  const value = indexNavigationPrioritizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
