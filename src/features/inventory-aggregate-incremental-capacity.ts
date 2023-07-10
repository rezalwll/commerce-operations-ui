/** aggregate the incremental capacity from a numeric series. */
export function aggregateInventoryIncrementalCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
