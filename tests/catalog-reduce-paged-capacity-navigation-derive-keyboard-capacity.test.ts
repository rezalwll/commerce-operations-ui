import { describe, expect, it } from 'vitest';
import { deriveNavigationKeyboardCapacity } from '../src/features/navigation-derive-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles repeated values', () => { expect(deriveNavigationKeyboardCapacity([2, 4, 6, 8])).toBe(8); });
});
