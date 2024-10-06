import React from 'react';
import { prioritizeInventoryRetryableCapacity } from '../features/inventory-prioritize-retryable-capacity';

type InventoryPrioritizeRetryableCapacityCardProps = { values: readonly number[]; label?: string };
export function InventoryPrioritizeRetryableCapacityCard({ values, label = 'capacity' }: InventoryPrioritizeRetryableCapacityCardProps) {
  const value = prioritizeInventoryRetryableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
