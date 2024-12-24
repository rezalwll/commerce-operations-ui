/** select the stable capacity from a numeric series. */
export function selectTelemetryStableCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
