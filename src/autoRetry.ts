import {sleep} from "./sleep";

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
export const autoRetry = async <T>(fn: () => Promise<T>, retries: number = 3, delay: number = 1000): Promise<T> => {
    let attempt = 0;

    while (attempt < retries) {
        try {
            return await fn();
        } catch (error) {
            attempt++;
            if (attempt >= retries) {
                // If we reach the maximum attempts, rethrow the error
                throw error;
            }
            await sleep(delay); // Wait for the delay before the next retry
        }
    }

    // We ensure TypeScript knows that this line will never be reached because
    // either the function returns or throws in all cases.
    throw new Error('Exhausted all retries');
};
