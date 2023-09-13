import React from 'react';
import { prioritizeSettingsIncrementalCapacity } from '../features/settings-prioritize-incremental-capacity';

type SettingsPrioritizeIncrementalCapacityCardProps = { values: readonly number[]; label?: string };
export function SettingsPrioritizeIncrementalCapacityCard({ values, label = 'capacity' }: SettingsPrioritizeIncrementalCapacityCardProps) {
  const value = prioritizeSettingsIncrementalCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
