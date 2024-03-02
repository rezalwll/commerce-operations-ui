/** normalize the memoized capacity from a numeric series. */
export function normalizeCustomersMemoizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
