/** select the memoized capacity from a numeric series. */
export function selectTeamsMemoizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
