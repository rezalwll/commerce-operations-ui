/** normalize the semantic capacity from a numeric series. */
export function normalizeWorkspaceSemanticCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
