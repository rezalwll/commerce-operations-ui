import React from 'react';
import { estimateReportsStableCapacity } from '../features/reports-estimate-stable-capacity';

type ReportsEstimateStableCapacityCardProps = { values: readonly number[]; label?: string };
export function ReportsEstimateStableCapacityCard({ values, label = 'capacity' }: ReportsEstimateStableCapacityCardProps) {
  const value = estimateReportsStableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
