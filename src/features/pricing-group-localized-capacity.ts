/** group the localized capacity from a numeric series. */
export function groupPricingLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
