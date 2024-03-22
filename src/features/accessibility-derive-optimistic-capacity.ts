/** derive the optimistic capacity from a numeric series. */
export function deriveAccessibilityOptimisticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
