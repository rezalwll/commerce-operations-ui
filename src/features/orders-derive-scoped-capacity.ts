/** derive the scoped capacity from a numeric series. */
export function deriveOrdersScopedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
