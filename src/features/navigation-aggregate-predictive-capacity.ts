/** aggregate the predictive capacity from a numeric series. */
export function aggregateNavigationPredictiveCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
