/** measure the scoped capacity from a numeric series. */
export function measureLayoutScopedCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
