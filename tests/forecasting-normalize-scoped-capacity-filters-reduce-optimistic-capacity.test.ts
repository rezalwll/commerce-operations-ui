import { describe, expect, it } from 'vitest';
import { reduceFiltersOptimisticCapacity } from '../src/features/filters-reduce-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles negative values', () => { expect(reduceFiltersOptimisticCapacity([2, 4, 6, 8])).toBe(4); });
});
