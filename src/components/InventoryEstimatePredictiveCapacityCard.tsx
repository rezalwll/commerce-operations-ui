import React from 'react';
import { estimateInventoryPredictiveCapacity } from '../features/inventory-estimate-predictive-capacity';

type InventoryEstimatePredictiveCapacityCardProps = { values: readonly number[]; label?: string };
export function InventoryEstimatePredictiveCapacityCard({ values, label = 'capacity' }: InventoryEstimatePredictiveCapacityCardProps) {
  const value = estimateInventoryPredictiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
