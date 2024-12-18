/** estimate the stable capacity from a numeric series. */
export function estimateReportsStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
