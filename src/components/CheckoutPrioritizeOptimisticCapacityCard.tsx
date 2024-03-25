import React from 'react';
import { prioritizeCheckoutOptimisticCapacity } from '../features/checkout-prioritize-optimistic-capacity';

type CheckoutPrioritizeOptimisticCapacityCardProps = { values: readonly number[]; label?: string };
export function CheckoutPrioritizeOptimisticCapacityCard({ values, label = 'capacity' }: CheckoutPrioritizeOptimisticCapacityCardProps) {
  const value = prioritizeCheckoutOptimisticCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
