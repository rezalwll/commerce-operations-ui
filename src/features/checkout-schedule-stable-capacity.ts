/** schedule the stable capacity from a numeric series. */
export function scheduleCheckoutStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
