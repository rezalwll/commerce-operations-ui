import React from 'react';
import { scheduleCheckoutStableCapacity } from '../features/checkout-schedule-stable-capacity';

type CheckoutScheduleStableCapacityCardProps = { values: readonly number[]; label?: string };
export function CheckoutScheduleStableCapacityCard({ values, label = 'capacity' }: CheckoutScheduleStableCapacityCardProps) {
  const value = scheduleCheckoutStableCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
