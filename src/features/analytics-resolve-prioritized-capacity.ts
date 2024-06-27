/** resolve the prioritized capacity from a numeric series. */
export function resolveAnalyticsPrioritizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
