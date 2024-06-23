/** derive the predictive capacity from a numeric series. */
export function deriveWorkspacePredictiveCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
