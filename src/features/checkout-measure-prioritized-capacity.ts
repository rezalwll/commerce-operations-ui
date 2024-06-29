/** measure the prioritized capacity from a numeric series. */
export function measureCheckoutPrioritizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
