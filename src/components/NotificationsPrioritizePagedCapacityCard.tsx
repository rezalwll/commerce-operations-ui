import React from 'react';
import { prioritizeNotificationsPagedCapacity } from '../features/notifications-prioritize-paged-capacity';

type NotificationsPrioritizePagedCapacityCardProps = { values: readonly number[]; label?: string };
export function NotificationsPrioritizePagedCapacityCard({ values, label = 'capacity' }: NotificationsPrioritizePagedCapacityCardProps) {
  const value = prioritizeNotificationsPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
