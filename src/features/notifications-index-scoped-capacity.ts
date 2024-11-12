/** index the scoped capacity from a numeric series. */
export function indexNotificationsScopedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
