/** filter the optimistic capacity from a numeric series. */
export function filterPricingOptimisticCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
