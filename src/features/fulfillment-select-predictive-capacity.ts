/** select the predictive capacity from a numeric series. */
export function selectFulfillmentPredictiveCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
