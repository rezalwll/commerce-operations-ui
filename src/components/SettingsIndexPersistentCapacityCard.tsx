import React from 'react';
import { indexSettingsPersistentCapacity } from '../features/settings-index-persistent-capacity';

type SettingsIndexPersistentCapacityCardProps = { values: readonly number[]; label?: string };
export function SettingsIndexPersistentCapacityCard({ values, label = 'capacity' }: SettingsIndexPersistentCapacityCardProps) {
  const value = indexSettingsPersistentCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
