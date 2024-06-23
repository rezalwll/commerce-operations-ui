/** summarize the predictive capacity from a numeric series. */
export function summarizePermissionsPredictiveCapacity(values: readonly number[]): number {
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
