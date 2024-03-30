import { describe, expect, it } from 'vitest';
import { measureAnalyticsKeyboardCapacity } from '../src/features/analytics-measure-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles sparse values', () => { expect(measureAnalyticsKeyboardCapacity([2, 4, 6, 8])).toBe(8); });
});
