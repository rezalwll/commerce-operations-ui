/** filter the stable capacity from a numeric series. */
export function filterFormsStableCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
