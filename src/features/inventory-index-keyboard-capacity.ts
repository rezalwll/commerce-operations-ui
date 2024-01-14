/** index the keyboard capacity from a numeric series. */
export function indexInventoryKeyboardCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
