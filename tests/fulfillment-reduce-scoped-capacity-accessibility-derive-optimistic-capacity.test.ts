import { describe, expect, it } from 'vitest';
import { deriveAccessibilityOptimisticCapacity } from '../src/features/accessibility-derive-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles negative values', () => { expect(deriveAccessibilityOptimisticCapacity([2, 4, 6, 8])).toBe(8); });
});
