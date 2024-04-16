/** classify the paged capacity from a numeric series. */
export function classifyCheckoutPagedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
