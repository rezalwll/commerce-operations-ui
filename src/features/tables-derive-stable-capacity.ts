/** derive the stable capacity from a numeric series. */
export function deriveTablesStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
