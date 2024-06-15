/** classify the predictive capacity from a numeric series. */
export function classifyProductsPredictiveCapacity(values: readonly number[]): number {
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
