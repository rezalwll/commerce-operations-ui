/** classify the keyboard capacity from a numeric series. */
export function classifySettingsKeyboardCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
