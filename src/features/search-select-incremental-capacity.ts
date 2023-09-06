/** select the incremental capacity from a numeric series. */
export function selectSearchIncrementalCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
