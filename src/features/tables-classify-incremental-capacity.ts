/** classify the incremental capacity from a numeric series. */
export function classifyTablesIncrementalCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
