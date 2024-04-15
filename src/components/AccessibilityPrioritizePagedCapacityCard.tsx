import React from 'react';
import { prioritizeAccessibilityPagedCapacity } from '../features/accessibility-prioritize-paged-capacity';

type AccessibilityPrioritizePagedCapacityCardProps = { values: readonly number[]; label?: string };
export function AccessibilityPrioritizePagedCapacityCard({ values, label = 'capacity' }: AccessibilityPrioritizePagedCapacityCardProps) {
  const value = prioritizeAccessibilityPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
