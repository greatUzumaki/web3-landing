'use client';

import { useState } from 'react';

const WorkerTest = () => {
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const startCalculation = () => {
    setIsCalculating(true);

    // Create a new worker instance
    const worker = new Worker(
      new URL('../workers/calculator.worker.ts', import.meta.url)
    );

    // Listen for messages from the worker
    worker.onmessage = (event) => {
      setResult(event.data.result);
      setIsCalculating(false);
      worker.terminate(); // Clean up the worker when done
    };

    // Send data to the worker
    worker.postMessage({
      numbers: Array.from({ length: 10 }, (_, i) => i + 1), // [1,2,3,...,10]
    });
  };

  return (
    <div style={{ position: 'fixed', bottom: 100, right: 100 }}>
      <button onClick={startCalculation} disabled={isCalculating}>
        {isCalculating ? 'Calculating...' : 'Start Heavy Calculation'}
      </button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
};

export default WorkerTest;
