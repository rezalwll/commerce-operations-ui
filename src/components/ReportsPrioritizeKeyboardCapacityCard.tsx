import React from 'react';
import { prioritizeReportsKeyboardCapacity } from '../features/reports-prioritize-keyboard-capacity';

type ReportsPrioritizeKeyboardCapacityCardProps = { values: readonly number[]; label?: string };
export function ReportsPrioritizeKeyboardCapacityCard({ values, label = 'capacity' }: ReportsPrioritizeKeyboardCapacityCardProps) {
  const value = prioritizeReportsKeyboardCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
