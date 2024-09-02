/** summarize the prioritized capacity from a numeric series. */
export function summarizeValidationPrioritizedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
