/** normalize the optimistic capacity from a numeric series. */
export function normalizePermissionsOptimisticCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
