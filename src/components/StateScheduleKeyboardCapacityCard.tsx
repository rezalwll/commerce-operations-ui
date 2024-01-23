import React from 'react';
import { scheduleStateKeyboardCapacity } from '../features/state-schedule-keyboard-capacity';

type StateScheduleKeyboardCapacityCardProps = { values: readonly number[]; label?: string };
export function StateScheduleKeyboardCapacityCard({ values, label = 'capacity' }: StateScheduleKeyboardCapacityCardProps) {
  const value = scheduleStateKeyboardCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
