/** schedule the semantic capacity from a numeric series. */
export function scheduleFormsSemanticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
