import React from 'react';
import { indexFormsResponsiveCapacity } from '../features/forms-index-responsive-capacity';

type FormsIndexResponsiveCapacityCardProps = { values: readonly number[]; label?: string };
export function FormsIndexResponsiveCapacityCard({ values, label = 'capacity' }: FormsIndexResponsiveCapacityCardProps) {
  const value = indexFormsResponsiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
