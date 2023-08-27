/** normalize the incremental capacity from a numeric series. */
export function normalizeRoutingIncrementalCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
