import React from 'react';
import { scheduleInventoryOptimisticCapacity } from '../features/inventory-schedule-optimistic-capacity';

type InventoryScheduleOptimisticCapacityCardProps = { values: readonly number[]; label?: string };
export function InventoryScheduleOptimisticCapacityCard({ values, label = 'capacity' }: InventoryScheduleOptimisticCapacityCardProps) {
  const value = scheduleInventoryOptimisticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
