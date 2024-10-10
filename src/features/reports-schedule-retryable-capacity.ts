/** schedule the retryable capacity from a numeric series. */
export function scheduleReportsRetryableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
