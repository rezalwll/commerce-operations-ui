/** derive the prioritized capacity from a numeric series. */
export function derivePricingPrioritizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
