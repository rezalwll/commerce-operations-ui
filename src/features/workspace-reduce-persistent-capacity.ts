/** reduce the persistent capacity from a numeric series. */
export function reduceWorkspacePersistentCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
