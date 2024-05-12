/** derive the persistent capacity from a numeric series. */
export function deriveCatalogPersistentCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
