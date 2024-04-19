import React from 'react';
import { scheduleDeliveryPagedCapacity } from '../features/delivery-schedule-paged-capacity';

type DeliverySchedulePagedCapacityCardProps = { values: readonly number[]; label?: string };
export function DeliverySchedulePagedCapacityCard({ values, label = 'capacity' }: DeliverySchedulePagedCapacityCardProps) {
  const value = scheduleDeliveryPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
