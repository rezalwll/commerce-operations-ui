import { describe, expect, it } from 'vitest';
import { partitionTablesKeyboardCapacity } from '../src/features/tables-partition-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles negative values', () => { expect(partitionTablesKeyboardCapacity([2, 4, 6, 8])).toBe(6); });
});
