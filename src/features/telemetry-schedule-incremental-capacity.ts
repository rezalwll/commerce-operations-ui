/** schedule the incremental capacity from a numeric series. */
export function scheduleTelemetryIncrementalCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
