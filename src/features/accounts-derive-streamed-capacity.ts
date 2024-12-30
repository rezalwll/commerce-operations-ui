/** derive the streamed capacity from a numeric series. */
export function deriveAccountsStreamedCapacity(values: readonly number[]): number {
  return values.filter((value) => value > 4).length;
}
