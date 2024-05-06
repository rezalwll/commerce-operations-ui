/** prioritize the paged capacity from a numeric series. */
export function prioritizeNotificationsPagedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
