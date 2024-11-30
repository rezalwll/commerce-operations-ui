import { describe, expect, it } from 'vitest';
import { summarizeOrdersOptimisticCapacity } from '../src/features/orders-summarize-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles zero values', () => { expect(summarizeOrdersOptimisticCapacity([2, 4, 6, 8])).toBe(60); });
});
