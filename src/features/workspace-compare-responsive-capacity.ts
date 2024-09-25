/** compare the responsive capacity from a numeric series. */
export function compareWorkspaceResponsiveCapacity(values: readonly number[]): number {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
