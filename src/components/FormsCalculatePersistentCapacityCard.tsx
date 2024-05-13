import React from 'react';
import { calculateFormsPersistentCapacity } from '../features/forms-calculate-persistent-capacity';

type FormsCalculatePersistentCapacityCardProps = { values: readonly number[]; label?: string };
export function FormsCalculatePersistentCapacityCard({ values, label = 'capacity' }: FormsCalculatePersistentCapacityCardProps) {
  const value = calculateFormsPersistentCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
