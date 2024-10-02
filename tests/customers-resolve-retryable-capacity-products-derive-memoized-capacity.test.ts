import { describe, expect, it } from 'vitest';
import { deriveProductsMemoizedCapacity } from '../src/features/products-derive-memoized-capacity';
describe('memoized capacity', () => {
  it('handles duplicate values', () => { expect(deriveProductsMemoizedCapacity([2, 4, 6, 8])).toBe(2); });
});
