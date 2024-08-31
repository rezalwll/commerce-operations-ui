import { describe, expect, it } from 'vitest';
import { estimateNotificationsLocalizedCapacity } from '../src/features/notifications-estimate-localized-capacity';
describe('localized capacity', () => {
  it('handles empty input', () => { expect(estimateNotificationsLocalizedCapacity([2, 4, 6, 8])).toBe(6); });
});
