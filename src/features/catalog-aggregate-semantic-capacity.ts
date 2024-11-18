/** aggregate the semantic capacity from a numeric series. */
export function aggregateCatalogSemanticCapacity(values: readonly number[]): number {
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
