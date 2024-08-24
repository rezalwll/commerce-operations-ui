/** index the prioritized capacity from a numeric series. */
export function indexNavigationPrioritizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
