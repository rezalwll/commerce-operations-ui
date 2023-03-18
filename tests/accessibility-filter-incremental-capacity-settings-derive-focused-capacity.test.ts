import { describe, expect, it } from 'vitest';
import { deriveSettingsFocusedCapacity } from '../src/features/settings-derive-focused-capacity';
describe('focused capacity', () => {
  it('handles single values', () => { expect(deriveSettingsFocusedCapacity([2, 4, 6, 8])).toBe(8); });
});
