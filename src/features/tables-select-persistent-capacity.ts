/** select the persistent capacity from a numeric series. */
export function selectTablesPersistentCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
