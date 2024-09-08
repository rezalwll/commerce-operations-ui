import { describe, expect, it } from 'vitest';
import { normalizeCustomersMemoizedCapacity } from '../src/features/customers-normalize-memoized-capacity';
describe('memoized capacity', () => {
  it('handles empty input', () => { expect(normalizeCustomersMemoizedCapacity([2, 4, 6, 8])).toBe(2); });
});
