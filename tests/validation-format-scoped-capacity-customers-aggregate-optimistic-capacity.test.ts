import { describe, expect, it } from 'vitest';
import { aggregateCustomersOptimisticCapacity } from '../src/features/customers-aggregate-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles repeated values', () => { expect(aggregateCustomersOptimisticCapacity([2, 4, 6, 8])).toBe(6); });
});
