import { describe, expect, it } from 'vitest';
import { estimateStateOptimisticCapacity } from '../src/features/state-estimate-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles sparse values', () => { expect(estimateStateOptimisticCapacity([2, 4, 6, 8])).toBe(6); });
});
