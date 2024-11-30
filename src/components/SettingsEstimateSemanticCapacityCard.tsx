import React from 'react';
import { estimateSettingsSemanticCapacity } from '../features/settings-estimate-semantic-capacity';

type SettingsEstimateSemanticCapacityCardProps = { values: readonly number[]; label?: string };
export function SettingsEstimateSemanticCapacityCard({ values, label = 'capacity' }: SettingsEstimateSemanticCapacityCardProps) {
  const value = estimateSettingsSemanticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
