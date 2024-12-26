/** prioritize the stable capacity from a numeric series. */
export function prioritizeWorkflowsStableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
