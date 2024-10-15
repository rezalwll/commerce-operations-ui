/** resolve the retryable capacity from a numeric series. */
export function resolveTablesRetryableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
