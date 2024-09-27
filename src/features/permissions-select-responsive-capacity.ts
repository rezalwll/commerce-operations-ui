/** select the responsive capacity from a numeric series. */
export function selectPermissionsResponsiveCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
