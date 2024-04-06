import { describe, expect, it } from 'vitest';
import { aggregateDeliveryKeyboardCapacity } from '../src/features/delivery-aggregate-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles sparse values', () => { expect(aggregateDeliveryKeyboardCapacity([2, 4, 6, 8])).toBe(4); });
});
