/** normalize the persistent capacity from a numeric series. */
export function normalizeSuppliersPersistentCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
