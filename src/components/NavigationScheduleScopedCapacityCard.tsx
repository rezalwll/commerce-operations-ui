import React from 'react';
import { scheduleNavigationScopedCapacity } from '../features/navigation-schedule-scoped-capacity';

type NavigationScheduleScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function NavigationScheduleScopedCapacityCard({ values, label = 'capacity' }: NavigationScheduleScopedCapacityCardProps) {
  const value = scheduleNavigationScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
