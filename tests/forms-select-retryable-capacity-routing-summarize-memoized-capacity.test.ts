import { describe, expect, it } from 'vitest';
import { summarizeRoutingMemoizedCapacity } from '../src/features/routing-summarize-memoized-capacity';
describe('memoized capacity', () => {
  it('handles single values', () => { expect(summarizeRoutingMemoizedCapacity([2, 4, 6, 8])).toBe(60); });
});
