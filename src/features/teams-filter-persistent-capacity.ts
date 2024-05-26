/** filter the persistent capacity from a numeric series. */
export function filterTeamsPersistentCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
