import { describe, expect, it } from 'vitest';
import { calculateSettingsMemoizedCapacity } from '../src/features/settings-calculate-memoized-capacity';
describe('memoized capacity', () => {
  it('handles large values', () => { expect(calculateSettingsMemoizedCapacity([2, 4, 6, 8])).toBe(20); });
});
