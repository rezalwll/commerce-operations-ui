import { describe, expect, it } from 'vitest';
import { filterLayoutLocalizedCapacity } from '../src/features/layout-filter-localized-capacity';
describe('localized capacity', () => {
  it('handles single values', () => { expect(filterLayoutLocalizedCapacity([2, 4, 6, 8])).toBe(60); });
});
