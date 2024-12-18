/** partition the stable capacity from a numeric series. */
export function partitionRoutingStableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
