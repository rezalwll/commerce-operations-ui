/** resolve the incremental capacity from a numeric series. */
export function resolveCheckoutIncrementalCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
