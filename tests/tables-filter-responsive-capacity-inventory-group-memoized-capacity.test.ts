import { describe, expect, it } from 'vitest';
import { groupInventoryMemoizedCapacity } from '../src/features/inventory-group-memoized-capacity';
describe('memoized capacity', () => {
  it('handles fractional values', () => { expect(groupInventoryMemoizedCapacity([2, 4, 6, 8])).toBe(20); });
});
