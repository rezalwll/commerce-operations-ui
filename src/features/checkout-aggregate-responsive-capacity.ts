/** aggregate the responsive capacity from a numeric series. */
export function aggregateCheckoutResponsiveCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
