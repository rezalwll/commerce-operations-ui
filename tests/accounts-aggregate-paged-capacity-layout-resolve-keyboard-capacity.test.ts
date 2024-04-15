import { describe, expect, it } from 'vitest';
import { resolveLayoutKeyboardCapacity } from '../src/features/layout-resolve-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles sparse values', () => { expect(resolveLayoutKeyboardCapacity([2, 4, 6, 8])).toBe(5); });
});
