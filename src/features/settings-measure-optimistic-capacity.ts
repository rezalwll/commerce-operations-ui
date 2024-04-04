/** measure the optimistic capacity from a numeric series. */
export function measureSettingsOptimisticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
