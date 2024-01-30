import { describe, expect, it } from 'vitest';
import { selectFiltersIncrementalCapacity } from '../src/features/filters-select-incremental-capacity';
describe('incremental capacity', () => {
  it('handles zero values', () => { expect(selectFiltersIncrementalCapacity([2, 4, 6, 8])).toBe(2); });
});
