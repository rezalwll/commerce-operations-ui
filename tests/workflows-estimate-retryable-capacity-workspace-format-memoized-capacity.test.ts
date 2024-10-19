import { describe, expect, it } from 'vitest';
import { formatWorkspaceMemoizedCapacity } from '../src/features/workspace-format-memoized-capacity';
describe('memoized capacity', () => {
  it('handles empty input', () => { expect(formatWorkspaceMemoizedCapacity([2, 4, 6, 8])).toBe(6); });
});
