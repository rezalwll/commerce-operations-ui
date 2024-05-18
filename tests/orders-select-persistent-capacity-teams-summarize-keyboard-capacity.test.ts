import { describe, expect, it } from 'vitest';
import { summarizeTeamsKeyboardCapacity } from '../src/features/teams-summarize-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles ordered values', () => { expect(summarizeTeamsKeyboardCapacity([2, 4, 6, 8])).toBe(60); });
});
