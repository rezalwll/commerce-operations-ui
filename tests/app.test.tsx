import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../src/App';
describe('commerce operations workspace', () => { it('summarizes the active fulfillment window', () => { render(<App />); expect(screen.getByRole('heading', { name: 'Commerce operations' })).toBeTruthy(); expect(screen.getByLabelText('Orders in review across selected channels').textContent).toBe('23'); }); });
