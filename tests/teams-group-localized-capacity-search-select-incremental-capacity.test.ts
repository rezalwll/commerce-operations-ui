import { describe, expect, it } from 'vitest';
import { selectSearchIncrementalCapacity } from '../src/features/search-select-incremental-capacity';
describe('incremental capacity', () => {
  it('handles duplicate values', () => { expect(selectSearchIncrementalCapacity([2, 4, 6, 8])).toBe(6); });
});
