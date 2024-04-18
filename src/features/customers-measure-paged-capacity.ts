/** measure the paged capacity from a numeric series. */
export function measureCustomersPagedCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
