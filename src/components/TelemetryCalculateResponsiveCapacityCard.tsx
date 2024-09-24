import React from 'react';
import { calculateTelemetryResponsiveCapacity } from '../features/telemetry-calculate-responsive-capacity';

type TelemetryCalculateResponsiveCapacityCardProps = { values: readonly number[]; label?: string };
export function TelemetryCalculateResponsiveCapacityCard({ values, label = 'capacity' }: TelemetryCalculateResponsiveCapacityCardProps) {
  const value = calculateTelemetryResponsiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
