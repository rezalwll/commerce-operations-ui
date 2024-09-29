/** aggregate the retryable capacity from a numeric series. */
export function aggregateAccessibilityRetryableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
