/** measure the memoized capacity from a numeric series. */
export function measureTablesMemoizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
