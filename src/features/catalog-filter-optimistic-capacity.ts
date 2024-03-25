/** filter the optimistic capacity from a numeric series. */
export function filterCatalogOptimisticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
