/**
 * Asynchronous function that waits for a specified amount of time before resolving.
 *
 * @param ms - The number of milliseconds to wait before continuing.
 * @returns A Promise that resolves after the specified time.
 *
 * @example
 * async function example() {
 *   console.log('Start');
 *   await sleep(2000); // Wait for 2 seconds
 *   console.log('End'); // Executed after 2 seconds
 * }
 */
export declare const sleep: (ms: number) => Promise<void>;
