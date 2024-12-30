import React from 'react';
import { MetricCard } from './components/MetricCard';
export function App() { return <main><h1>Commerce operations</h1><p>Channel health for the current fulfillment window.</p><MetricCard label="Orders in review" values={[12, 7, 4]} /></main>; }
