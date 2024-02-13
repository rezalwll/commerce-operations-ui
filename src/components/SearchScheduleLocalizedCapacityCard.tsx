import React from 'react';
import { scheduleSearchLocalizedCapacity } from '../features/search-schedule-localized-capacity';

type SearchScheduleLocalizedCapacityCardProps = { values: readonly number[]; label?: string };
export function SearchScheduleLocalizedCapacityCard({ values, label = 'capacity' }: SearchScheduleLocalizedCapacityCardProps) {
  const value = scheduleSearchLocalizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
