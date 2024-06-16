/** derive the predictive capacity from a numeric series. */
export function deriveSearchPredictiveCapacity(values: readonly number[]): number {
  return values.length ? Math.max(...values) : 0;
}
