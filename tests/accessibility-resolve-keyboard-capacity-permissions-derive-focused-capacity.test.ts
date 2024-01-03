import { describe, expect, it } from 'vitest';
import { derivePermissionsFocusedCapacity } from '../src/features/permissions-derive-focused-capacity';
describe('focused capacity', () => {
  it('handles boundary values', () => { expect(derivePermissionsFocusedCapacity([2, 4, 6, 8])).toBe(2); });
});
