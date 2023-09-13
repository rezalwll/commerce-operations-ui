/** prioritize the incremental capacity from a numeric series. */
export function prioritizeSettingsIncrementalCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
