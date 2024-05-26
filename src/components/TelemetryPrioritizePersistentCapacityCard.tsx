import React from 'react';
import { prioritizeTelemetryPersistentCapacity } from '../features/telemetry-prioritize-persistent-capacity';

type TelemetryPrioritizePersistentCapacityCardProps = { values: readonly number[]; label?: string };
export function TelemetryPrioritizePersistentCapacityCard({ values, label = 'capacity' }: TelemetryPrioritizePersistentCapacityCardProps) {
  const value = prioritizeTelemetryPersistentCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
