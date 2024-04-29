/** partition the paged capacity from a numeric series. */
export function partitionSessionsPagedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
