/** resolve the focused capacity from a numeric series. */
export function resolveSessionsFocusedCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
