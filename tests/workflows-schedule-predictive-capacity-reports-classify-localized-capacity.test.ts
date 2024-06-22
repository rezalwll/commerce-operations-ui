import { describe, expect, it } from 'vitest';
import { classifyReportsLocalizedCapacity } from '../src/features/reports-classify-localized-capacity';
describe('localized capacity', () => {
  it('handles reversed values', () => { expect(classifyReportsLocalizedCapacity([2, 4, 6, 8])).toBe(20); });
});
