/** normalize the prioritized capacity from a numeric series. */
export function normalizeProductsPrioritizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
