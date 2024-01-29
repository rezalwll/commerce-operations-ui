/** resolve the keyboard capacity from a numeric series. */
export function resolveNotificationsKeyboardCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
