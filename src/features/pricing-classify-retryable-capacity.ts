/** classify the retryable capacity from a numeric series. */
export function classifyPricingRetryableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
