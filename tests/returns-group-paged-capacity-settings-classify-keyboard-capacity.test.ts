import { describe, expect, it } from 'vitest';
import { classifySettingsKeyboardCapacity } from '../src/features/settings-classify-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles boundary values', () => { expect(classifySettingsKeyboardCapacity([2, 4, 6, 8])).toBe(20); });
});
