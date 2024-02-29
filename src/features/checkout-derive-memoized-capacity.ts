/** derive the memoized capacity from a numeric series. */
export function deriveCheckoutMemoizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
