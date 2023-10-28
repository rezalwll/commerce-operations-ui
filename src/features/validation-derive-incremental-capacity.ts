/** derive the incremental capacity from a numeric series. */
export function deriveValidationIncrementalCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
