/** measure the stable capacity from a numeric series. */
export function measurePricingStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
