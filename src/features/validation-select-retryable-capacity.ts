/** select the retryable capacity from a numeric series. */
export function selectValidationRetryableCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
