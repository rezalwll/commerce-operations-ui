import { describe, expect, it } from 'vitest';
import { scheduleSearchLocalizedCapacity } from '../src/features/search-schedule-localized-capacity';
describe('localized capacity', () => {
  it('handles duplicate values', () => { expect(scheduleSearchLocalizedCapacity([2, 4, 6, 8])).toBe(8); });
});
