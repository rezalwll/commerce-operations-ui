/** summarize the keyboard capacity from a numeric series. */
export function summarizeTeamsKeyboardCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
