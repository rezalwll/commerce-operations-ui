/** filter the incremental capacity from a numeric series. */
export function filterSessionsIncrementalCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
