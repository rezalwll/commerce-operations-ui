import { describe, expect, it } from 'vitest';
import { resolveNotificationsKeyboardCapacity } from '../src/features/notifications-resolve-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles sparse values', () => { expect(resolveNotificationsKeyboardCapacity([2, 4, 6, 8])).toBe(20); });
});
