import { describe, expect, it } from 'vitest';
import { scheduleInventoryOptimisticCapacity } from '../src/features/inventory-schedule-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles negative values', () => { expect(scheduleInventoryOptimisticCapacity([2, 4, 6, 8])).toBe(8); });
});
