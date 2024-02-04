/** index the localized capacity from a numeric series. */
export function indexDeliveryLocalizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
