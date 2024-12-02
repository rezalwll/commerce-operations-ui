import { describe, expect, it } from 'vitest';
import { calculateReportsOptimisticCapacity } from '../src/features/reports-calculate-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles reversed values', () => { expect(calculateReportsOptimisticCapacity([2, 4, 6, 8])).toBe(20); });
});
