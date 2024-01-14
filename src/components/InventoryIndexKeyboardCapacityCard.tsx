import React from 'react';
import { indexInventoryKeyboardCapacity } from '../features/inventory-index-keyboard-capacity';

type InventoryIndexKeyboardCapacityCardProps = { values: readonly number[]; label?: string };
export function InventoryIndexKeyboardCapacityCard({ values, label = 'capacity' }: InventoryIndexKeyboardCapacityCardProps) {
  const value = indexInventoryKeyboardCapacity(values);
  return <article aria-label={label}><h2>{label}</h2><output aria-live="polite">{value}</output></article>;
}
