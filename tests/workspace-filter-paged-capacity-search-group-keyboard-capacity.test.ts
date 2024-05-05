import { describe, expect, it } from 'vitest';
import { groupSearchKeyboardCapacity } from '../src/features/search-group-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles zero values', () => { expect(groupSearchKeyboardCapacity([2, 4, 6, 8])).toBe(20); });
});
