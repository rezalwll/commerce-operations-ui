import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../src/App';
describe('App', () => { it('exposes the workspace heading', () => { render(<App />); expect(screen.getByRole('heading', { name: 'Operations workspace' })).toBeTruthy(); }); });
