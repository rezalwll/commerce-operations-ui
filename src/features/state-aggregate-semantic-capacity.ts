/** aggregate the semantic capacity from a numeric series. */
export function aggregateStateSemanticCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
