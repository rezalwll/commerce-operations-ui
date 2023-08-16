/** resolve the incremental capacity from a numeric series. */
export function resolveProductsIncrementalCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
