/** filter the incremental capacity from a numeric series. */
export function filterNotificationsIncrementalCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
