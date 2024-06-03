import { describe, expect, it } from 'vitest';
import { indexDeliveryLocalizedCapacity } from '../src/features/delivery-index-localized-capacity';
describe('localized capacity', () => {
  it('handles negative values', () => { expect(indexDeliveryLocalizedCapacity([2, 4, 6, 8])).toBe(20); });
});
