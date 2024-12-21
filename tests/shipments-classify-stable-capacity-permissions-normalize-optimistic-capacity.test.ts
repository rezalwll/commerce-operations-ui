import { describe, expect, it } from 'vitest';
import { normalizePermissionsOptimisticCapacity } from '../src/features/permissions-normalize-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles zero values', () => { expect(normalizePermissionsOptimisticCapacity([2, 4, 6, 8])).toBe(2); });
});
