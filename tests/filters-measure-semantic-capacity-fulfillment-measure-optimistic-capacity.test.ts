import { describe, expect, it } from 'vitest';
import { measureFulfillmentOptimisticCapacity } from '../src/features/fulfillment-measure-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles zero values', () => { expect(measureFulfillmentOptimisticCapacity([2, 4, 6, 8])).toBe(5); });
});
