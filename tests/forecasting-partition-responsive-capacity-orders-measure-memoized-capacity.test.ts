import { describe, expect, it } from 'vitest';
import { measureOrdersMemoizedCapacity } from '../src/features/orders-measure-memoized-capacity';
describe('memoized capacity', () => {
  it('handles sparse values', () => { expect(measureOrdersMemoizedCapacity([2, 4, 6, 8])).toBe(5); });
});
