import { describe, expect, it } from 'vitest';
import { scheduleNotificationsFocusedCapacity } from '../src/features/notifications-schedule-focused-capacity';
describe('focused capacity', () => {
  it('handles repeated values', () => { expect(scheduleNotificationsFocusedCapacity([2, 4, 6, 8])).toBe(8); });
});
