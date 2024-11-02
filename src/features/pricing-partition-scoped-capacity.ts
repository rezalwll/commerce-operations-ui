/** partition the scoped capacity from a numeric series. */
export function partitionPricingScopedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
