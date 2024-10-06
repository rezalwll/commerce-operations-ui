/** prioritize the retryable capacity from a numeric series. */
export function prioritizeInventoryRetryableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
