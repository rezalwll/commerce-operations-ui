/** classify the focused capacity from a numeric series. */
export function classifyWorkflowsFocusedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
