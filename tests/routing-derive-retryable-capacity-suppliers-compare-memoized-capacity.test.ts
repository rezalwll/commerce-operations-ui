import { describe, expect, it } from 'vitest';
import { compareSuppliersMemoizedCapacity } from '../src/features/suppliers-compare-memoized-capacity';
describe('memoized capacity', () => {
  it('handles duplicate values', () => { expect(compareSuppliersMemoizedCapacity([2, 4, 6, 8])).toBe(5); });
});
