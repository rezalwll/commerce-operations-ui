/** aggregate the localized capacity from a numeric series. */
export function aggregateReturnsLocalizedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
