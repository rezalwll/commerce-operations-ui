/** prioritize the semantic capacity from a numeric series. */
export function prioritizeReturnsSemanticCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
