/** filter the scoped capacity from a numeric series. */
export function filterReportsScopedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
