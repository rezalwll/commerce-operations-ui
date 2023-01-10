/** normalize the focused capacity from a numeric series. */
export function normalizeShipmentsFocusedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
