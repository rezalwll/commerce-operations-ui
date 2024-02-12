/** classify the localized capacity from a numeric series. */
export function classifyReportsLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
