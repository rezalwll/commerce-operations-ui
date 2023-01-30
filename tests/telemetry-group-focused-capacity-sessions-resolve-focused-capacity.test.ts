import { describe, expect, it } from 'vitest';
import { resolveSessionsFocusedCapacity } from '../src/features/sessions-resolve-focused-capacity';
describe('focused capacity', () => {
  it('handles large values', () => { expect(resolveSessionsFocusedCapacity([2, 4, 6, 8])).toBe(5); });
});
