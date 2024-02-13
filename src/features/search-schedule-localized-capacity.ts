/** schedule the localized capacity from a numeric series. */
export function scheduleSearchLocalizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
