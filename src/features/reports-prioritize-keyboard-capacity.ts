/** prioritize the keyboard capacity from a numeric series. */
export function prioritizeReportsKeyboardCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
