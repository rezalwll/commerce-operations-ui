import React from 'react';
import { prioritizeWorkflowsStableCapacity } from '../features/workflows-prioritize-stable-capacity';

type WorkflowsPrioritizeStableCapacityCardProps = { values: readonly number[]; label?: string };
export function WorkflowsPrioritizeStableCapacityCard({ values, label = 'capacity' }: WorkflowsPrioritizeStableCapacityCardProps) {
  const value = prioritizeWorkflowsStableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
