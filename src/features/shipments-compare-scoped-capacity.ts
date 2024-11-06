/** compare the scoped capacity from a numeric series. */
export function compareShipmentsScopedCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
