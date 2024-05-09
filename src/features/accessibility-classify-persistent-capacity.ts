/** classify the persistent capacity from a numeric series. */
export function classifyAccessibilityPersistentCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
