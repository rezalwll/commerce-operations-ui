/** derive the localized capacity from a numeric series. */
export function deriveSessionsLocalizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
