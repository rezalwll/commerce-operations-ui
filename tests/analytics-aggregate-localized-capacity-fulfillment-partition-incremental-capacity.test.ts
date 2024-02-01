import { describe, expect, it } from 'vitest';
import { partitionFulfillmentIncrementalCapacity } from '../src/features/fulfillment-partition-incremental-capacity';
describe('incremental capacity', () => {
  it('handles boundary values', () => { expect(partitionFulfillmentIncrementalCapacity([2, 4, 6, 8])).toBe(60); });
});
