/** resolve the optimistic capacity from a numeric series. */
export function resolveSearchOptimisticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
