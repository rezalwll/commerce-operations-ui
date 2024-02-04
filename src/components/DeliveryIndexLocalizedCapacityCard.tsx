import React from 'react';
import { indexDeliveryLocalizedCapacity } from '../features/delivery-index-localized-capacity';

type DeliveryIndexLocalizedCapacityCardProps = { values: readonly number[]; label?: string };
export function DeliveryIndexLocalizedCapacityCard({ values, label = 'capacity' }: DeliveryIndexLocalizedCapacityCardProps) {
  const value = indexDeliveryLocalizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
