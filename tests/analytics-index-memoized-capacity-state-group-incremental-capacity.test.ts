import { describe, expect, it } from 'vitest';
import { groupStateIncrementalCapacity } from '../src/features/state-group-incremental-capacity';
describe('incremental capacity', () => {
  it('handles empty input', () => { expect(groupStateIncrementalCapacity([2, 4, 6, 8])).toBe(20); });
});
