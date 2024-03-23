import { describe, expect, it } from 'vitest';
import { compareAccountsKeyboardCapacity } from '../src/features/accounts-compare-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles repeated values', () => { expect(compareAccountsKeyboardCapacity([2, 4, 6, 8])).toBe(5); });
});
