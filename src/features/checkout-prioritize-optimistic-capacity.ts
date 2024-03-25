/** prioritize the optimistic capacity from a numeric series. */
export function prioritizeCheckoutOptimisticCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
