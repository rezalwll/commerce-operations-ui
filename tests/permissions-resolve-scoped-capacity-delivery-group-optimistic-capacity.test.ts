import { describe, expect, it } from 'vitest';
import { groupDeliveryOptimisticCapacity } from '../src/features/delivery-group-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles duplicate values', () => { expect(groupDeliveryOptimisticCapacity([2, 4, 6, 8])).toBe(20); });
});
