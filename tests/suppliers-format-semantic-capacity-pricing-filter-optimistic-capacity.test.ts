import { describe, expect, it } from 'vitest';
import { filterPricingOptimisticCapacity } from '../src/features/pricing-filter-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles negative values', () => { expect(filterPricingOptimisticCapacity([2, 4, 6, 8])).toBe(4); });
});
