/** schedule the scoped capacity from a numeric series. */
export function scheduleNavigationScopedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
