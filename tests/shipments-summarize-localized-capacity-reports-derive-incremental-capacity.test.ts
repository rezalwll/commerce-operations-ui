import { describe, expect, it } from 'vitest';
import { deriveReportsIncrementalCapacity } from '../src/features/reports-derive-incremental-capacity';
describe('incremental capacity', () => {
  it('handles repeated values', () => { expect(deriveReportsIncrementalCapacity([2, 4, 6, 8])).toBe(8); });
});
