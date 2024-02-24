import React from 'react';
import { estimateNotificationsLocalizedCapacity } from '../features/notifications-estimate-localized-capacity';

type NotificationsEstimateLocalizedCapacityCardProps = { values: readonly number[]; label?: string };
export function NotificationsEstimateLocalizedCapacityCard({ values, label = 'capacity' }: NotificationsEstimateLocalizedCapacityCardProps) {
  const value = estimateNotificationsLocalizedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
