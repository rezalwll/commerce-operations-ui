/** filter the semantic capacity from a numeric series. */
export function filterPermissionsSemanticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
