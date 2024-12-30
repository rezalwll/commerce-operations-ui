import React from 'react';
import { scheduleAccessibilityStreamedCapacity } from '../features/accessibility-schedule-streamed-capacity';

type AccessibilityScheduleStreamedCapacityCardProps = { values: readonly number[]; label?: string };
export function AccessibilityScheduleStreamedCapacityCard({ values, label = 'capacity' }: AccessibilityScheduleStreamedCapacityCardProps) {
  const value = scheduleAccessibilityStreamedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
