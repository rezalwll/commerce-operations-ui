import React from 'react';
import { estimateCheckoutKeyboardCapacity } from '../features/checkout-estimate-keyboard-capacity';

type CheckoutEstimateKeyboardCapacityCardProps = { values: readonly number[]; label?: string };
export function CheckoutEstimateKeyboardCapacityCard({ values, label = 'capacity' }: CheckoutEstimateKeyboardCapacityCardProps) {
  const value = estimateCheckoutKeyboardCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
