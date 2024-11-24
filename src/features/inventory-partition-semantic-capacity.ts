/** partition the semantic capacity from a numeric series. */
export function partitionInventorySemanticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
