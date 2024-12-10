import { describe, expect, it } from 'vitest';
import { measureSettingsOptimisticCapacity } from '../src/features/settings-measure-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles ordered values', () => { expect(measureSettingsOptimisticCapacity([2, 4, 6, 8])).toBe(8); });
});
