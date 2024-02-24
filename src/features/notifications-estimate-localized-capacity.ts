/** estimate the localized capacity from a numeric series. */
export function estimateNotificationsLocalizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
