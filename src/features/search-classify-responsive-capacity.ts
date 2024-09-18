/** classify the responsive capacity from a numeric series. */
export function classifySearchResponsiveCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
