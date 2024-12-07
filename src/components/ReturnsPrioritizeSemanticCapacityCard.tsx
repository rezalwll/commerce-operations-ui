import React from 'react';
import { prioritizeReturnsSemanticCapacity } from '../features/returns-prioritize-semantic-capacity';

type ReturnsPrioritizeSemanticCapacityCardProps = { values: readonly number[]; label?: string };
export function ReturnsPrioritizeSemanticCapacityCard({ values, label = 'capacity' }: ReturnsPrioritizeSemanticCapacityCardProps) {
  const value = prioritizeReturnsSemanticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
