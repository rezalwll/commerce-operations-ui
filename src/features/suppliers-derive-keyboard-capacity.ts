/** derive the keyboard capacity from a numeric series. */
export function deriveSuppliersKeyboardCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
