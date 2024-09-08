import { describe, expect, it } from 'vitest';
import { deriveCheckoutMemoizedCapacity } from '../src/features/checkout-derive-memoized-capacity';
describe('memoized capacity', () => {
  it('handles fractional values', () => { expect(deriveCheckoutMemoizedCapacity([2, 4, 6, 8])).toBe(8); });
});
