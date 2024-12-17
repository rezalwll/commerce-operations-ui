/** select the stable capacity from a numeric series. */
export function selectProductsStableCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
