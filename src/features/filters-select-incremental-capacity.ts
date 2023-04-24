/** select the incremental capacity from a numeric series. */
export function selectFiltersIncrementalCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
