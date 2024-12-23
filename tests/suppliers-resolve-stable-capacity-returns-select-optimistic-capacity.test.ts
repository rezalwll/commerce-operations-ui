import { describe, expect, it } from 'vitest';
import { selectReturnsOptimisticCapacity } from '../src/features/returns-select-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles duplicate values', () => { expect(selectReturnsOptimisticCapacity([2, 4, 6, 8])).toBe(6); });
});
