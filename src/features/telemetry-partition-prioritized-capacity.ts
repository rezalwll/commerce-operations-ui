/** partition the prioritized capacity from a numeric series. */
export function partitionTelemetryPrioritizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
