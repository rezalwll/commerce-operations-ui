/** resolve the persistent capacity from a numeric series. */
export function resolveInventoryPersistentCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
