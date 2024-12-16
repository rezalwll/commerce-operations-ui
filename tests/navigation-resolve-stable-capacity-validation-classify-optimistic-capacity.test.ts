import { describe, expect, it } from 'vitest';
import { classifyValidationOptimisticCapacity } from '../src/features/validation-classify-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles boundary values', () => { expect(classifyValidationOptimisticCapacity([2, 4, 6, 8])).toBe(4); });
});
