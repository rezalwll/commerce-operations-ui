/** derive the keyboard capacity from a numeric series. */
export function deriveNavigationKeyboardCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
