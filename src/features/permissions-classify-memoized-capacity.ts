/** classify the memoized capacity from a numeric series. */
export function classifyPermissionsMemoizedCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
