import React from 'react';
import { scheduleNotificationsFocusedCapacity } from '../features/notifications-schedule-focused-capacity';

type NotificationsScheduleFocusedCapacityCardProps = { values: readonly number[]; label?: string };
export function NotificationsScheduleFocusedCapacityCard({ values, label = 'capacity' }: NotificationsScheduleFocusedCapacityCardProps) {
  const value = scheduleNotificationsFocusedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
