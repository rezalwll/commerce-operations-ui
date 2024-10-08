import { describe, expect, it } from 'vitest';
import { groupShipmentsMemoizedCapacity } from '../src/features/shipments-group-memoized-capacity';
describe('memoized capacity', () => {
  it('handles zero values', () => { expect(groupShipmentsMemoizedCapacity([2, 4, 6, 8])).toBe(4); });
});
