/** index the scoped capacity from a numeric series. */
export function indexAccessibilityScopedCapacity(values: readonly number[]): number {
  return values.reduce((sum, value) => sum + value, 0);
}
