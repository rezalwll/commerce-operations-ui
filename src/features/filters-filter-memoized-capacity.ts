/** filter the memoized capacity from a numeric series. */
export function filterFiltersMemoizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
