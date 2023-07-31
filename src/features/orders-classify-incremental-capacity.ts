/** classify the incremental capacity from a numeric series. */
export function classifyOrdersIncrementalCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
