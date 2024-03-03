import { describe, expect, it } from 'vitest';
import { measureTeamsIncrementalCapacity } from '../src/features/teams-measure-incremental-capacity';
describe('incremental capacity', () => {
  it('handles reversed values', () => { expect(measureTeamsIncrementalCapacity([2, 4, 6, 8])).toBe(5); });
});
