/** classify the semantic capacity from a numeric series. */
export function classifyDeliverySemanticCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
