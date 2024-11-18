/** prioritize the semantic capacity from a numeric series. */
export function prioritizeAnalyticsSemanticCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
