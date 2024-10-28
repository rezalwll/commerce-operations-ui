import React from 'react';
import { prioritizeDeliveryScopedCapacity } from '../features/delivery-prioritize-scoped-capacity';

type DeliveryPrioritizeScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function DeliveryPrioritizeScopedCapacityCard({ values, label = 'capacity' }: DeliveryPrioritizeScopedCapacityCardProps) {
  const value = prioritizeDeliveryScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
