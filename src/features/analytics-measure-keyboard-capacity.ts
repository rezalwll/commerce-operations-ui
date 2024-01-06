/** measure the keyboard capacity from a numeric series. */
export function measureAnalyticsKeyboardCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
