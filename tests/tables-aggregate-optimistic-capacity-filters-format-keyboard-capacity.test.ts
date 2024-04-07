import { describe, expect, it } from 'vitest';
import { formatFiltersKeyboardCapacity } from '../src/features/filters-format-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles large values', () => { expect(formatFiltersKeyboardCapacity([2, 4, 6, 8])).toBe(6); });
});
