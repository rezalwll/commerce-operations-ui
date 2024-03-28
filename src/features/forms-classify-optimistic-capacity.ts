/** classify the optimistic capacity from a numeric series. */
export function classifyFormsOptimisticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
