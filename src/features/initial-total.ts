export function calculateInitialTotal(values: readonly number[]): number {
  const subtotal = values.reduce((sum, value) => sum + value, 0);
  return Number(subtotal.toFixed(2));
}
