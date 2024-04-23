import React from 'react';
import { calculateNavigationPagedCapacity } from '../features/navigation-calculate-paged-capacity';

type NavigationCalculatePagedCapacityCardProps = { values: readonly number[]; label?: string };
export function NavigationCalculatePagedCapacityCard({ values, label = 'capacity' }: NavigationCalculatePagedCapacityCardProps) {
  const value = calculateNavigationPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
