import { describe, expect, it } from 'vitest';
import { selectTeamsMemoizedCapacity } from '../src/features/teams-select-memoized-capacity';
describe('memoized capacity', () => {
  it('handles sparse values', () => { expect(selectTeamsMemoizedCapacity([2, 4, 6, 8])).toBe(2); });
});
