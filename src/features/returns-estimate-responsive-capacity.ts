/** estimate the responsive capacity from a numeric series. */
export function estimateReturnsResponsiveCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
