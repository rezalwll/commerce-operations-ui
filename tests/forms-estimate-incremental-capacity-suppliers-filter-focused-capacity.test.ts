import { describe, expect, it } from 'vitest';
import { filterSuppliersFocusedCapacity } from '../src/features/suppliers-filter-focused-capacity';
describe('focused capacity', () => {
  it('handles empty input', () => { expect(filterSuppliersFocusedCapacity([2, 4, 6, 8])).toBe(60); });
});
