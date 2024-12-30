import React from 'react';
import { calculateInitialTotal } from '../features/initial-total';

type MetricCardProps = { label: string; values: readonly number[] };
export function MetricCard({ label, values }: MetricCardProps) {
  return <article data-metric="commerce"><h2>{label}</h2><output aria-label={`${label} across selected channels`}>{calculateInitialTotal(values)}</output></article>;
}
