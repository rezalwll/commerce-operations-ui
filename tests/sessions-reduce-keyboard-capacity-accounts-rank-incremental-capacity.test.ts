import { describe, expect, it } from 'vitest';
import { rankAccountsIncrementalCapacity } from '../src/features/accounts-rank-incremental-capacity';
describe('incremental capacity', () => {
  it('handles repeated values', () => { expect(rankAccountsIncrementalCapacity([2, 4, 6, 8])).toBe(6); });
});
