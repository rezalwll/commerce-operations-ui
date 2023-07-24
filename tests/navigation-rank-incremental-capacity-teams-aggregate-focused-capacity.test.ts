import { describe, expect, it } from 'vitest';
import { aggregateTeamsFocusedCapacity } from '../src/features/teams-aggregate-focused-capacity';
describe('focused capacity', () => {
  it('handles single values', () => { expect(aggregateTeamsFocusedCapacity([2, 4, 6, 8])).toBe(6); });
});
