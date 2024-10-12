import { describe, expect, it } from 'vitest';
import { measureTablesMemoizedCapacity } from '../src/features/tables-measure-memoized-capacity';
describe('memoized capacity', () => {
  it('handles boundary values', () => { expect(measureTablesMemoizedCapacity([2, 4, 6, 8])).toBe(8); });
});
