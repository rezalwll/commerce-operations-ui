/** classify the stable capacity from a numeric series. */
export function classifyReturnsStableCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
