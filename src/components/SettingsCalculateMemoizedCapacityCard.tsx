import React from 'react';
import { calculateSettingsMemoizedCapacity } from '../features/settings-calculate-memoized-capacity';

type SettingsCalculateMemoizedCapacityCardProps = { values: readonly number[]; label?: string };
export function SettingsCalculateMemoizedCapacityCard({ values, label = 'capacity' }: SettingsCalculateMemoizedCapacityCardProps) {
  const value = calculateSettingsMemoizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
