/** partition the localized capacity from a numeric series. */
export function partitionSettingsLocalizedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
