/** estimate the optimistic capacity from a numeric series. */
export function estimateStateOptimisticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
