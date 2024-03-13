import { describe, expect, it } from 'vitest';
import { filterNotificationsIncrementalCapacity } from '../src/features/notifications-filter-incremental-capacity';
describe('incremental capacity', () => {
  it('handles large values', () => { expect(filterNotificationsIncrementalCapacity([2, 4, 6, 8])).toBe(4); });
});
