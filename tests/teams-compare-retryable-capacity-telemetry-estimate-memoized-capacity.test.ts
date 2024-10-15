import { describe, expect, it } from 'vitest';
import { estimateTelemetryMemoizedCapacity } from '../src/features/telemetry-estimate-memoized-capacity';
describe('memoized capacity', () => {
  it('handles repeated values', () => { expect(estimateTelemetryMemoizedCapacity([2, 4, 6, 8])).toBe(6); });
});
