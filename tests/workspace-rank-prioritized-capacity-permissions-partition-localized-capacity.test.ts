import { describe, expect, it } from 'vitest';
import { partitionPermissionsLocalizedCapacity } from '../src/features/permissions-partition-localized-capacity';
describe('localized capacity', () => {
  it('handles ordered values', () => { expect(partitionPermissionsLocalizedCapacity([2, 4, 6, 8])).toBe(60); });
});
