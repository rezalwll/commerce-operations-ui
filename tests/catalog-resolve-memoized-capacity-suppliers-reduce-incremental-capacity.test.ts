import { describe, expect, it } from 'vitest';
import { reduceSuppliersIncrementalCapacity } from '../src/features/suppliers-reduce-incremental-capacity';
describe('incremental capacity', () => {
  it('handles duplicate values', () => { expect(reduceSuppliersIncrementalCapacity([2, 4, 6, 8])).toBe(4); });
});
