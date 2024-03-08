/** derive the memoized capacity from a numeric series. */
export function deriveProductsMemoizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
