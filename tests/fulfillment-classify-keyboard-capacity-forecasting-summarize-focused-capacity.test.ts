import { describe, expect, it } from 'vitest';
import { summarizeForecastingFocusedCapacity } from '../src/features/forecasting-summarize-focused-capacity';
describe('focused capacity', () => {
  it('handles zero values', () => { expect(summarizeForecastingFocusedCapacity([2, 4, 6, 8])).toBe(60); });
});
