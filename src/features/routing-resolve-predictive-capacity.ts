/** resolve the predictive capacity from a numeric series. */
export function resolveRoutingPredictiveCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
