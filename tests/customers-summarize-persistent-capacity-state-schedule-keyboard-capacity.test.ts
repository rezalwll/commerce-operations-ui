import { describe, expect, it } from 'vitest';
import { scheduleStateKeyboardCapacity } from '../src/features/state-schedule-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles repeated values', () => { expect(scheduleStateKeyboardCapacity([2, 4, 6, 8])).toBe(8); });
});
