import { describe, expect, it } from 'vitest';
import { filterProductsKeyboardCapacity } from '../src/features/products-filter-keyboard-capacity';
describe('keyboard capacity', () => {
  it('handles sparse values', () => { expect(filterProductsKeyboardCapacity([2, 4, 6, 8])).toBe(60); });
});
