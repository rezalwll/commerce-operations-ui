import React from 'react';
import { indexAccessibilityScopedCapacity } from '../features/accessibility-index-scoped-capacity';

type AccessibilityIndexScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function AccessibilityIndexScopedCapacityCard({ values, label = 'capacity' }: AccessibilityIndexScopedCapacityCardProps) {
  const value = indexAccessibilityScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
