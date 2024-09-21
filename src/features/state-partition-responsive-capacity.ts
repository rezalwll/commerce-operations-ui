/** partition the responsive capacity from a numeric series. */
export function partitionStateResponsiveCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
