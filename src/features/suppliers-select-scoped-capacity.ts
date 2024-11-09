/** select the scoped capacity from a numeric series. */
export function selectSuppliersScopedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
