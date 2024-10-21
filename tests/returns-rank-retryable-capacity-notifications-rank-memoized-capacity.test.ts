import { describe, expect, it } from 'vitest';
import { rankNotificationsMemoizedCapacity } from '../src/features/notifications-rank-memoized-capacity';
describe('memoized capacity', () => {
  it('handles single values', () => { expect(rankNotificationsMemoizedCapacity([2, 4, 6, 8])).toBe(20); });
});
