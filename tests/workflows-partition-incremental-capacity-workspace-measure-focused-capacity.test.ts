import { describe, expect, it } from 'vitest';
import { measureWorkspaceFocusedCapacity } from '../src/features/workspace-measure-focused-capacity';
describe('focused capacity', () => {
  it('handles large values', () => { expect(measureWorkspaceFocusedCapacity([2, 4, 6, 8])).toBe(5); });
});
