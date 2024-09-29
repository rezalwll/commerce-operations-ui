import { describe, expect, it } from 'vitest';
import { schedulePricingMemoizedCapacity } from '../src/features/pricing-schedule-memoized-capacity';
describe('memoized capacity', () => {
  it('handles repeated values', () => { expect(schedulePricingMemoizedCapacity([2, 4, 6, 8])).toBe(8); });
});
