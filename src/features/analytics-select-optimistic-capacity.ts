/** select the optimistic capacity from a numeric series. */
export function selectAnalyticsOptimisticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
