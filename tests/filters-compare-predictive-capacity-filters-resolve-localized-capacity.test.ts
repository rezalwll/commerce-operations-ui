import { describe, expect, it } from 'vitest';
import { resolveFiltersLocalizedCapacity } from '../src/features/filters-resolve-localized-capacity';
describe('localized capacity', () => {
  it('handles repeated values', () => { expect(resolveFiltersLocalizedCapacity([2, 4, 6, 8])).toBe(5); });
});
