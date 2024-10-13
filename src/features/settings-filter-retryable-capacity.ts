/** filter the retryable capacity from a numeric series. */
export function filterSettingsRetryableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
