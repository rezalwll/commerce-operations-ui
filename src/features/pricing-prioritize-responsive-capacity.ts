/** prioritize the responsive capacity from a numeric series. */
export function prioritizePricingResponsiveCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
