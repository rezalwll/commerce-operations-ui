/** filter the scoped capacity from a numeric series. */
export function filterCustomersScopedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
