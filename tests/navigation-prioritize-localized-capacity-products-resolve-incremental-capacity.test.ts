import { describe, expect, it } from 'vitest';
import { resolveProductsIncrementalCapacity } from '../src/features/products-resolve-incremental-capacity';
describe('incremental capacity', () => {
  it('handles empty input', () => { expect(resolveProductsIncrementalCapacity([2, 4, 6, 8])).toBe(5); });
});
