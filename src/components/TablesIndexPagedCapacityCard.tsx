import React from 'react';
import { indexTablesPagedCapacity } from '../features/tables-index-paged-capacity';

type TablesIndexPagedCapacityCardProps = { values: readonly number[]; label?: string };
export function TablesIndexPagedCapacityCard({ values, label = 'capacity' }: TablesIndexPagedCapacityCardProps) {
  const value = indexTablesPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
