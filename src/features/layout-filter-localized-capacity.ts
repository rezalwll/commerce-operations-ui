/** filter the localized capacity from a numeric series. */
export function filterLayoutLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
