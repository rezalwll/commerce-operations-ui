/** index the responsive capacity from a numeric series. */
export function indexFormsResponsiveCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
