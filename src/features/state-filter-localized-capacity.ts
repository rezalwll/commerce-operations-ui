/** filter the localized capacity from a numeric series. */
export function filterStateLocalizedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
