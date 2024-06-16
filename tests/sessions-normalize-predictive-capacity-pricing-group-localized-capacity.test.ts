import { describe, expect, it } from 'vitest';
import { groupPricingLocalizedCapacity } from '../src/features/pricing-group-localized-capacity';
describe('localized capacity', () => {
  it('handles repeated values', () => { expect(groupPricingLocalizedCapacity([2, 4, 6, 8])).toBe(20); });
});
