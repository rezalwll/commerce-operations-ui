import { describe, expect, it } from 'vitest';
import { partitionNavigationOptimisticCapacity } from '../src/features/navigation-partition-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles single values', () => { expect(partitionNavigationOptimisticCapacity([2, 4, 6, 8])).toBe(6); });
});
