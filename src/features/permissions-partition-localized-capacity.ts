/** partition the localized capacity from a numeric series. */
export function partitionPermissionsLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
