import React from 'react';
import { prioritizeAnalyticsSemanticCapacity } from '../features/analytics-prioritize-semantic-capacity';

type AnalyticsPrioritizeSemanticCapacityCardProps = { values: readonly number[]; label?: string };
export function AnalyticsPrioritizeSemanticCapacityCard({ values, label = 'capacity' }: AnalyticsPrioritizeSemanticCapacityCardProps) {
  const value = prioritizeAnalyticsSemanticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
