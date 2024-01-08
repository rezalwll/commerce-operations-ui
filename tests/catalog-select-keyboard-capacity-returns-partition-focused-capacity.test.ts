import { describe, expect, it } from 'vitest';
import { partitionReturnsFocusedCapacity } from '../src/features/returns-partition-focused-capacity';
describe('focused capacity', () => {
  it('handles ordered values', () => { expect(partitionReturnsFocusedCapacity([2, 4, 6, 8])).toBe(6); });
});
