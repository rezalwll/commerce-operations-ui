import { describe, expect, it } from 'vitest';
import { rankAccessibilityMemoizedCapacity } from '../src/features/accessibility-rank-memoized-capacity';
describe('memoized capacity', () => {
  it('handles repeated values', () => { expect(rankAccessibilityMemoizedCapacity([2, 4, 6, 8])).toBe(20); });
});
