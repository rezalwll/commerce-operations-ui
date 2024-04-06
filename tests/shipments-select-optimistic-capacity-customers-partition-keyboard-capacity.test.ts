import { describe, expect, it } from 'vitest';
import { partitionCustomersKeyboardCapacity } from '../src/features/customers-partition-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles ordered values', () => { expect(partitionCustomersKeyboardCapacity([2, 4, 6, 8])).toBe(60); });
});
