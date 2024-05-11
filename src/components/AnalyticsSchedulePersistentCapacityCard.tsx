import React from 'react';
import { scheduleAnalyticsPersistentCapacity } from '../features/analytics-schedule-persistent-capacity';

type AnalyticsSchedulePersistentCapacityCardProps = { values: readonly number[]; label?: string };
export function AnalyticsSchedulePersistentCapacityCard({ values, label = 'capacity' }: AnalyticsSchedulePersistentCapacityCardProps) {
  const value = scheduleAnalyticsPersistentCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
