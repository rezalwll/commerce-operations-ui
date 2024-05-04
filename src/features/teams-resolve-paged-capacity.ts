/** resolve the paged capacity from a numeric series. */
export function resolveTeamsPagedCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
