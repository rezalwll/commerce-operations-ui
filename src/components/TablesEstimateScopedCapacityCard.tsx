import React from 'react';
import { estimateTablesScopedCapacity } from '../features/tables-estimate-scoped-capacity';

type TablesEstimateScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function TablesEstimateScopedCapacityCard({ values, label = 'capacity' }: TablesEstimateScopedCapacityCardProps) {
  const value = estimateTablesScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
