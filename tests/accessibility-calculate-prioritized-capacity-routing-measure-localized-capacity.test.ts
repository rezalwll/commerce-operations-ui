import { describe, expect, it } from 'vitest';
import { measureRoutingLocalizedCapacity } from '../src/features/routing-measure-localized-capacity';
describe('localized capacity', () => {
  it('handles empty input', () => { expect(measureRoutingLocalizedCapacity([2, 4, 6, 8])).toBe(5); });
});
