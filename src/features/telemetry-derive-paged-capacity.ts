/** derive the paged capacity from a numeric series. */
export function deriveTelemetryPagedCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
