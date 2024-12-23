/** index the stable capacity from a numeric series. */
export function indexStateStableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
