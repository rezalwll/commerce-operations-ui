import { describe, expect, it } from 'vitest';
import { calculateWorkflowsKeyboardCapacity } from '../src/features/workflows-calculate-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles reversed values', () => { expect(calculateWorkflowsKeyboardCapacity([2, 4, 6, 8])).toBe(20); });
});
