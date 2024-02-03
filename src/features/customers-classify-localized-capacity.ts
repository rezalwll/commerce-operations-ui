/** classify the localized capacity from a numeric series. */
export function classifyCustomersLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
