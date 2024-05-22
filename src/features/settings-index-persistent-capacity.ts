/** index the persistent capacity from a numeric series. */
export function indexSettingsPersistentCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
