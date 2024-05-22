import { describe, expect, it } from 'vitest';
import { comparePermissionsKeyboardCapacity } from '../src/features/permissions-compare-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles duplicate values', () => { expect(comparePermissionsKeyboardCapacity([2, 4, 6, 8])).toBe(5); });
});
