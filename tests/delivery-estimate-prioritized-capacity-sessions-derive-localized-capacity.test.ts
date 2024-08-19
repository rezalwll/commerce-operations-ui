import { describe, expect, it } from 'vitest';
import { deriveSessionsLocalizedCapacity } from '../src/features/sessions-derive-localized-capacity';
describe('localized capacity', () => {
  it('handles reversed values', () => { expect(deriveSessionsLocalizedCapacity([2, 4, 6, 8])).toBe(2); });
});
