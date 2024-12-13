/** partition the stable capacity from a numeric series. */
export function partitionDeliveryStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
