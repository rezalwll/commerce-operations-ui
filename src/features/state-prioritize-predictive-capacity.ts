/** prioritize the predictive capacity from a numeric series. */
export function prioritizeStatePredictiveCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
