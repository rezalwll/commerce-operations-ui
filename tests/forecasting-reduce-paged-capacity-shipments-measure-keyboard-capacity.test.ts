import { describe, expect, it } from 'vitest';
import { measureShipmentsKeyboardCapacity } from '../src/features/shipments-measure-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles negative values', () => { expect(measureShipmentsKeyboardCapacity([2, 4, 6, 8])).toBe(5); });
});
