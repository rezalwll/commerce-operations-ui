/** schedule the streamed capacity from a numeric series. */
export function scheduleAccessibilityStreamedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
