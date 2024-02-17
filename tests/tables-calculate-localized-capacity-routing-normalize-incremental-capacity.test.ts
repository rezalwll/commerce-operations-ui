import { describe, expect, it } from 'vitest';
import { normalizeRoutingIncrementalCapacity } from '../src/features/routing-normalize-incremental-capacity';
describe('incremental capacity', () => {
  it('handles empty input', () => { expect(normalizeRoutingIncrementalCapacity([2, 4, 6, 8])).toBe(2); });
});
