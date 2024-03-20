import { describe, expect, it } from 'vitest';
import { groupForecastingIncrementalCapacity } from '../src/features/forecasting-group-incremental-capacity';
describe('incremental capacity', () => {
  it('handles reversed values', () => { expect(groupForecastingIncrementalCapacity([2, 4, 6, 8])).toBe(4); });
});
