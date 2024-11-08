/** measure the scoped capacity from a numeric series. */
export function measureStateScopedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
