import { describe, expect, it } from 'vitest';
import { classifyFormsOptimisticCapacity } from '../src/features/forms-classify-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles repeated values', () => { expect(classifyFormsOptimisticCapacity([2, 4, 6, 8])).toBe(20); });
});
