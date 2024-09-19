/** schedule the responsive capacity from a numeric series. */
export function scheduleSettingsResponsiveCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
