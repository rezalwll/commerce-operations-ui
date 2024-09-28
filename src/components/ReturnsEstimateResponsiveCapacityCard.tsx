import React from 'react';
import { estimateReturnsResponsiveCapacity } from '../features/returns-estimate-responsive-capacity';

type ReturnsEstimateResponsiveCapacityCardProps = { values: readonly number[]; label?: string };
export function ReturnsEstimateResponsiveCapacityCard({ values, label = 'capacity' }: ReturnsEstimateResponsiveCapacityCardProps) {
  const value = estimateReturnsResponsiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
