import React from 'react';
import { scheduleReportsRetryableCapacity } from '../features/reports-schedule-retryable-capacity';

type ReportsScheduleRetryableCapacityCardProps = { values: readonly number[]; label?: string };
export function ReportsScheduleRetryableCapacityCard({ values, label = 'capacity' }: ReportsScheduleRetryableCapacityCardProps) {
  const value = scheduleReportsRetryableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
