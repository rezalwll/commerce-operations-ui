/** select the localized capacity from a numeric series. */
export function selectWorkspaceLocalizedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
