/** prioritize the paged capacity from a numeric series. */
export function prioritizeAccessibilityPagedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
