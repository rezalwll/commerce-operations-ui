import { describe, expect, it } from 'vitest';
import { prioritizeSettingsIncrementalCapacity } from '../src/features/settings-prioritize-incremental-capacity';
describe('incremental capacity', () => {
  it('handles zero values', () => { expect(prioritizeSettingsIncrementalCapacity([2, 4, 6, 8])).toBe(4); });
});
