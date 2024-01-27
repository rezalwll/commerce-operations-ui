import React from 'react';
import { calculateWorkflowsKeyboardCapacity } from '../features/workflows-calculate-keyboard-capacity';

type WorkflowsCalculateKeyboardCapacityCardProps = { values: readonly number[]; label?: string };
export function WorkflowsCalculateKeyboardCapacityCard({ values, label = 'capacity' }: WorkflowsCalculateKeyboardCapacityCardProps) {
  const value = calculateWorkflowsKeyboardCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
