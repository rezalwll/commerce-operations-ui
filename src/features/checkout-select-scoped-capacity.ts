/** select the scoped capacity from a numeric series. */
export function selectCheckoutScopedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
