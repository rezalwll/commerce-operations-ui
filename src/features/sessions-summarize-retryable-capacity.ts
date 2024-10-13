/** summarize the retryable capacity from a numeric series. */
export function summarizeSessionsRetryableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
