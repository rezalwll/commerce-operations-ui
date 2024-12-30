import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
const workspace = document.querySelector<HTMLElement>('[data-commerce-root]');
if (!workspace) throw new Error('Commerce operations root is missing');
createRoot(workspace).render(<React.StrictMode><App /></React.StrictMode>);
