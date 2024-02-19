/** resolve the localized capacity from a numeric series. */
export function resolveTelemetryLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
