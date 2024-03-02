import { describe, expect, it } from 'vitest';
import { classifyTablesIncrementalCapacity } from '../src/features/tables-classify-incremental-capacity';
describe('incremental capacity', () => {
  it('handles single values', () => { expect(classifyTablesIncrementalCapacity([2, 4, 6, 8])).toBe(20); });
});
