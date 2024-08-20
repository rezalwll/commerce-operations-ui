import { describe, expect, it } from 'vitest';
import { filterStateLocalizedCapacity } from '../src/features/state-filter-localized-capacity';
describe('localized capacity', () => {
  it('handles large values', () => { expect(filterStateLocalizedCapacity([2, 4, 6, 8])).toBe(4); });
});
