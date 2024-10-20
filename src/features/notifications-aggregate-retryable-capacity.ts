/** aggregate the retryable capacity from a numeric series. */
export function aggregateNotificationsRetryableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
