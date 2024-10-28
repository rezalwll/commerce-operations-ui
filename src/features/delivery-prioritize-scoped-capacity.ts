/** prioritize the scoped capacity from a numeric series. */
export function prioritizeDeliveryScopedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
