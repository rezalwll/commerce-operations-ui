/** resolve the predictive capacity from a numeric series. */
export function resolveDeliveryPredictiveCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
