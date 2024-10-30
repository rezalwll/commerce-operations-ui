/** classify the scoped capacity from a numeric series. */
export function classifyInventoryScopedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
