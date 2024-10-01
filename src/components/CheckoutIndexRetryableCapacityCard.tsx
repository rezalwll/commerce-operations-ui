import React from 'react';
import { indexCheckoutRetryableCapacity } from '../features/checkout-index-retryable-capacity';

type CheckoutIndexRetryableCapacityCardProps = { values: readonly number[]; label?: string };
export function CheckoutIndexRetryableCapacityCard({ values, label = 'capacity' }: CheckoutIndexRetryableCapacityCardProps) {
  const value = indexCheckoutRetryableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
