/** partition the keyboard capacity from a numeric series. */
export function partitionTablesKeyboardCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
