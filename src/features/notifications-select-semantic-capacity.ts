/** select the semantic capacity from a numeric series. */
export function selectNotificationsSemanticCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
