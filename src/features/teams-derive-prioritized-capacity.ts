/** derive the prioritized capacity from a numeric series. */
export function deriveTeamsPrioritizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
