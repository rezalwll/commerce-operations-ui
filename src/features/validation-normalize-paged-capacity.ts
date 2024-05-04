/** normalize the paged capacity from a numeric series. */
export function normalizeValidationPagedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
