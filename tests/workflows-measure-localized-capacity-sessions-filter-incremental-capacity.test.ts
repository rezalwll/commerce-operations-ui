import { describe, expect, it } from 'vitest';
import { filterSessionsIncrementalCapacity } from '../src/features/sessions-filter-incremental-capacity';
describe('incremental capacity', () => {
  it('handles single values', () => { expect(filterSessionsIncrementalCapacity([2, 4, 6, 8])).toBe(60); });
});
