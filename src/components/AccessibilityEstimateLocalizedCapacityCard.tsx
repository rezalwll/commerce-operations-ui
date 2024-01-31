import React from 'react';
import { estimateAccessibilityLocalizedCapacity } from '../features/accessibility-estimate-localized-capacity';

type AccessibilityEstimateLocalizedCapacityCardProps = { values: readonly number[]; label?: string };
export function AccessibilityEstimateLocalizedCapacityCard({ values, label = 'capacity' }: AccessibilityEstimateLocalizedCapacityCardProps) {
  const value = estimateAccessibilityLocalizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
