/** estimate the scoped capacity from a numeric series. */
export function estimateTablesScopedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
