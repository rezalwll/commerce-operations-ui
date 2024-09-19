import React from 'react';
import { scheduleSettingsResponsiveCapacity } from '../features/settings-schedule-responsive-capacity';

type SettingsScheduleResponsiveCapacityCardProps = { values: readonly number[]; label?: string };
export function SettingsScheduleResponsiveCapacityCard({ values, label = 'capacity' }: SettingsScheduleResponsiveCapacityCardProps) {
  const value = scheduleSettingsResponsiveCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
