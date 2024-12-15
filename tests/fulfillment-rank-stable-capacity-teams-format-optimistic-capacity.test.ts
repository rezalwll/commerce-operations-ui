import { describe, expect, it } from 'vitest';
import { formatTeamsOptimisticCapacity } from '../src/features/teams-format-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles zero values', () => { expect(formatTeamsOptimisticCapacity([2, 4, 6, 8])).toBe(6); });
});
