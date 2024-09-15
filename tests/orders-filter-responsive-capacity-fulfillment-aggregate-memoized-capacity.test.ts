import { describe, expect, it } from 'vitest';
import { aggregateFulfillmentMemoizedCapacity } from '../src/features/fulfillment-aggregate-memoized-capacity';
describe('memoized capacity', () => {
  it('handles zero values', () => { expect(aggregateFulfillmentMemoizedCapacity([2, 4, 6, 8])).toBe(6); });
});
