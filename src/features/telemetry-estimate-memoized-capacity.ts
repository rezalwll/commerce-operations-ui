/** estimate the memoized capacity from a numeric series. */
export function estimateTelemetryMemoizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
