/** normalize the keyboard capacity from a numeric series. */
export function normalizeOrdersKeyboardCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
