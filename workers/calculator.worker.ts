// This is a Web Worker file
self.onmessage = (event) => {
  const { numbers } = event.data;

  // Simulate heavy computation
  const result = numbers.reduce((sum: number, num: number) => {
    // Artificial delay to simulate heavy computation
    const start = Date.now();
    while (Date.now() - start < 100) {} // Busy wait for 100ms
    return sum + num;
  }, 0);

  // Send the result back to the main thread
  self.postMessage({ result });
};
