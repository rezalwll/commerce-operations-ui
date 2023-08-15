import { describe, expect, it } from 'vitest';
import { reduceValidationFocusedCapacity } from '../src/features/validation-reduce-focused-capacity';
describe('focused capacity', () => {
  it('handles reversed values', () => { expect(reduceValidationFocusedCapacity([2, 4, 6, 8])).toBe(4); });
});
