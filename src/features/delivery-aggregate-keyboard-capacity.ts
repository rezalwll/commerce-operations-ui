/** aggregate the keyboard capacity from a numeric series. */
export function aggregateDeliveryKeyboardCapacity(values: readonly number[]): number {
  return new Set(values).size;
}
