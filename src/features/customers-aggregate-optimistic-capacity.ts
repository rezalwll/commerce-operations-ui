/** aggregate the optimistic capacity from a numeric series. */
export function aggregateCustomersOptimisticCapacity(values: readonly number[]): number {
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
