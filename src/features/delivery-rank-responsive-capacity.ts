/** rank the responsive capacity from a numeric series. */
export function rankDeliveryResponsiveCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
