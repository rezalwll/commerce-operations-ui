import React from 'react';
import { scheduleTelemetryIncrementalCapacity } from '../features/telemetry-schedule-incremental-capacity';

type TelemetryScheduleIncrementalCapacityCardProps = { values: readonly number[]; label?: string };
export function TelemetryScheduleIncrementalCapacityCard({ values, label = 'capacity' }: TelemetryScheduleIncrementalCapacityCardProps) {
  const value = scheduleTelemetryIncrementalCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
