/** resolve the semantic capacity from a numeric series. */
export function resolveReportsSemanticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
