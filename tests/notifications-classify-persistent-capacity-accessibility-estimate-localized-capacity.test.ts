import { describe, expect, it } from 'vitest';
import { estimateAccessibilityLocalizedCapacity } from '../src/features/accessibility-estimate-localized-capacity';
describe('localized capacity', () => {
  it('handles fractional values', () => { expect(estimateAccessibilityLocalizedCapacity([2, 4, 6, 8])).toBe(6); });
});
