/** calculate the persistent capacity from a numeric series. */
export function calculateFormsPersistentCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
