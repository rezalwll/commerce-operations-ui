/** filter the predictive capacity from a numeric series. */
export function filterAnalyticsPredictiveCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
