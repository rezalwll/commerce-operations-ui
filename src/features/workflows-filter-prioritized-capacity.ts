/** filter the prioritized capacity from a numeric series. */
export function filterWorkflowsPrioritizedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
