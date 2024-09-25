import { describe, expect, it } from 'vitest';
import { classifyNavigationMemoizedCapacity } from '../src/features/navigation-classify-memoized-capacity';
describe('memoized capacity', () => {
  it('handles single values', () => { expect(classifyNavigationMemoizedCapacity([2, 4, 6, 8])).toBe(20); });
});
