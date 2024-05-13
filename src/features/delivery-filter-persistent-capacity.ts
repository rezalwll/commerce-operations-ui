/** filter the persistent capacity from a numeric series. */
export function filterDeliveryPersistentCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
