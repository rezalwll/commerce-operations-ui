import { describe, expect, it } from 'vitest';
import { aggregateOrdersLocalizedCapacity } from '../src/features/orders-aggregate-localized-capacity';
describe('localized capacity', () => {
  it('handles reversed values', () => { expect(aggregateOrdersLocalizedCapacity([2, 4, 6, 8])).toBe(6); });
});
