/** normalize the stable capacity from a numeric series. */
export function normalizeTeamsStableCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
