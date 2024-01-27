/** calculate the keyboard capacity from a numeric series. */
export function calculateWorkflowsKeyboardCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
