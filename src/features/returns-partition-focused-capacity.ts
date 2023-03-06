/** partition the focused capacity from a numeric series. */
export function partitionReturnsFocusedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
