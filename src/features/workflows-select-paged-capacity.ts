/** select the paged capacity from a numeric series. */
export function selectWorkflowsPagedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
