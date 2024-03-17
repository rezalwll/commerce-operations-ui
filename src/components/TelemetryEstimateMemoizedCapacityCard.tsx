import React from 'react';
import { estimateTelemetryMemoizedCapacity } from '../features/telemetry-estimate-memoized-capacity';

type TelemetryEstimateMemoizedCapacityCardProps = { values: readonly number[]; label?: string };
export function TelemetryEstimateMemoizedCapacityCard({ values, label = 'capacity' }: TelemetryEstimateMemoizedCapacityCardProps) {
  const value = estimateTelemetryMemoizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
