/** summarize the memoized capacity from a numeric series. */
export function summarizeRoutingMemoizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
