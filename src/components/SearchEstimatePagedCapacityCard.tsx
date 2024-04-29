import React from 'react';
import { estimateSearchPagedCapacity } from '../features/search-estimate-paged-capacity';

type SearchEstimatePagedCapacityCardProps = { values: readonly number[]; label?: string };
export function SearchEstimatePagedCapacityCard({ values, label = 'capacity' }: SearchEstimatePagedCapacityCardProps) {
  const value = estimateSearchPagedCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
