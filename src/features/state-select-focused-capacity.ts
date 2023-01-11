/** select the focused capacity from a numeric series. */
export function selectStateFocusedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
