/** measure the retryable capacity from a numeric series. */
export function measureTelemetryRetryableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
