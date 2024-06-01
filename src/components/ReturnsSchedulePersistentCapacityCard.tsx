import React from 'react';
import { scheduleReturnsPersistentCapacity } from '../features/returns-schedule-persistent-capacity';

type ReturnsSchedulePersistentCapacityCardProps = { values: readonly number[]; label?: string };
export function ReturnsSchedulePersistentCapacityCard({ values, label = 'capacity' }: ReturnsSchedulePersistentCapacityCardProps) {
  const value = scheduleReturnsPersistentCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
