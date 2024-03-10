import { describe, expect, it } from 'vitest';
import { deriveValidationIncrementalCapacity } from '../src/features/validation-derive-incremental-capacity';
describe('incremental capacity', () => {
  it('handles ordered values', () => { expect(deriveValidationIncrementalCapacity([2, 4, 6, 8])).toBe(2); });
});
