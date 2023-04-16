/** compare the incremental capacity from a numeric series. */
export function compareCustomersIncrementalCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
