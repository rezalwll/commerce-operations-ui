import { describe, expect, it } from 'vitest';
import { estimateCheckoutKeyboardCapacity } from '../src/features/checkout-estimate-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles duplicate values', () => { expect(estimateCheckoutKeyboardCapacity([2, 4, 6, 8])).toBe(6); });
});
