/** group the persistent capacity from a numeric series. */
export function groupWorkflowsPersistentCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
