/** summarize the focused capacity from a numeric series. */
export function summarizeForecastingFocusedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
