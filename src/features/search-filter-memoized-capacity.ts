/** filter the memoized capacity from a numeric series. */
export function filterSearchMemoizedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
