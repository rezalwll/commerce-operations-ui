/** aggregate the persistent capacity from a numeric series. */
export function aggregateReportsPersistentCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
