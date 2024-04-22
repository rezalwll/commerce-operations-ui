/** filter the paged capacity from a numeric series. */
export function filterInventoryPagedCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
