/** group the semantic capacity from a numeric series. */
export function groupCheckoutSemanticCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
