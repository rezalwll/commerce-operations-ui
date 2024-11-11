/** aggregate the scoped capacity from a numeric series. */
export function aggregateTelemetryScopedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
