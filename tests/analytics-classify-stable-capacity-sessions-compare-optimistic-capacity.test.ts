import { describe, expect, it } from 'vitest';
import { compareSessionsOptimisticCapacity } from '../src/features/sessions-compare-optimistic-capacity';
describe('optimistic capacity', () => {
  it('handles single values', () => { expect(compareSessionsOptimisticCapacity([2, 4, 6, 8])).toBe(5); });
});
