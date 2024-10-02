import { describe, expect, it } from 'vitest';
import { partitionReportsMemoizedCapacity } from '../src/features/reports-partition-memoized-capacity';
describe('memoized capacity', () => {
  it('handles boundary values', () => { expect(partitionReportsMemoizedCapacity([2, 4, 6, 8])).toBe(6); });
});
