import { describe, expect, it } from 'vitest';
import { normalizeOrdersKeyboardCapacity } from '../src/features/orders-normalize-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles duplicate values', () => { expect(normalizeOrdersKeyboardCapacity([2, 4, 6, 8])).toBe(2); });
});
