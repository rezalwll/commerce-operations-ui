import React from 'react';
import { scheduleFormsSemanticCapacity } from '../features/forms-schedule-semantic-capacity';

type FormsScheduleSemanticCapacityCardProps = { values: readonly number[]; label?: string };
export function FormsScheduleSemanticCapacityCard({ values, label = 'capacity' }: FormsScheduleSemanticCapacityCardProps) {
  const value = scheduleFormsSemanticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
