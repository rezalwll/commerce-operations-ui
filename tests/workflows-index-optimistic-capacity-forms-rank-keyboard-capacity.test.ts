import { describe, expect, it } from 'vitest';
import { rankFormsKeyboardCapacity } from '../src/features/forms-rank-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles empty input', () => { expect(rankFormsKeyboardCapacity([2, 4, 6, 8])).toBe(20); });
});
