/** prioritize the persistent capacity from a numeric series. */
export function prioritizeTelemetryPersistentCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
