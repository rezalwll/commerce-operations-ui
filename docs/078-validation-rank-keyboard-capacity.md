# Keyboard Capacity

This note records the decision behind **validation** behavior in commerce-operations-ui.

## Context

The capacity must remain understandable when data is incomplete, reordered, or empty. The implementation keeps the calculation deterministic and avoids mutating caller-owned collections.

## Decision

Use a small, independently testable function for the keyboard path. Keep input normalization at the boundary and return a neutral value for missing samples.

## Consequences

- Consumers can reuse the rule without importing UI code.
- Focused tests can cover boundaries and regressions.
- Future changes must preserve the documented empty-state behavior.

Review marker: decision 78 in the project evolution.
