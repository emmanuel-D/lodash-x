/**
 * Automatically retries an async function a specified number of times with a delay between retries.
 *
 * @param fn - The async function to retry.
 * @param retries - The number of times to retry (default: 3).
 * @param delay - The delay between retries in milliseconds (default: 1000).
 * @returns A Promise that resolves if the function succeeds within the retries, or rejects after exhausting retries.
 *
 * @example
 * await autoRetry(async () => { /* failing logic *\/ }, 3, 1000);
 */
export declare const autoRetry: <T>(fn: () => Promise<T>, retries?: number, delay?: number) => Promise<T>;
