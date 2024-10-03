/**
 * Waits for a condition to become true, checking it periodically.
 *
 * @param condition - The condition to wait for.
 * @param interval - The time in milliseconds between checks (default: 100ms).
 * @param timeout - The maximum time in milliseconds to wait (default: 5000ms).
 * @returns A Promise that resolves when the condition becomes true or rejects after timeout.
 *
 * @example
 * waitFor(() => document.getElementById('myElement'), 100, 5000);
 */
export declare const waitFor: (condition: () => boolean, interval?: number, timeout?: number) => Promise<void>;
