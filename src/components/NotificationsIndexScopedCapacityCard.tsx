import React from 'react';
import { indexNotificationsScopedCapacity } from '../features/notifications-index-scoped-capacity';

type NotificationsIndexScopedCapacityCardProps = { values: readonly number[]; label?: string };
export function NotificationsIndexScopedCapacityCard({ values, label = 'capacity' }: NotificationsIndexScopedCapacityCardProps) {
  const value = indexNotificationsScopedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
