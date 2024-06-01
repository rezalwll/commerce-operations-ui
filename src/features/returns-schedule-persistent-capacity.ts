/** schedule the persistent capacity from a numeric series. */
export function scheduleReturnsPersistentCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
