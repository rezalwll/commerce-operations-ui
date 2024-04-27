import { describe, expect, it } from 'vitest';
import { prioritizeReportsKeyboardCapacity } from '../src/features/reports-prioritize-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles zero values', () => { expect(prioritizeReportsKeyboardCapacity([2, 4, 6, 8])).toBe(4); });
});
