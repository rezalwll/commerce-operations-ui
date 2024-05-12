/** partition the persistent capacity from a numeric series. */
export function partitionCheckoutPersistentCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
