import { describe, expect, it } from 'vitest';
import { rankPermissionsIncrementalCapacity } from '../src/features/permissions-rank-incremental-capacity';
describe('incremental capacity', () => {
  it('handles duplicate values', () => { expect(rankPermissionsIncrementalCapacity([2, 4, 6, 8])).toBe(6); });
});
