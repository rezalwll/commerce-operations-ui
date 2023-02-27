/** derive the focused capacity from a numeric series. */
export function derivePermissionsFocusedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
