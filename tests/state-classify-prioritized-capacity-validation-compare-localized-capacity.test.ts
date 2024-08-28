import { describe, expect, it } from 'vitest';
import { compareValidationLocalizedCapacity } from '../src/features/validation-compare-localized-capacity';
describe('localized capacity', () => {
  it('handles fractional values', () => { expect(compareValidationLocalizedCapacity([2, 4, 6, 8])).toBe(5); });
});
