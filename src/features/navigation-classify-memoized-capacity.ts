/** classify the memoized capacity from a numeric series. */
export function classifyNavigationMemoizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
