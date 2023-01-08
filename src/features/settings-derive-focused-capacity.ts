/** derive the focused capacity from a numeric series. */
export function deriveSettingsFocusedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
