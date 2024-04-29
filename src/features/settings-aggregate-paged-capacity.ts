/** aggregate the paged capacity from a numeric series. */
export function aggregateSettingsPagedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
