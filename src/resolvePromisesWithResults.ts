import {autoRetry} from "./autoRetry";

/**
 * Resolves multiple promises in parallel and returns an object containing both resolved values and errors.
 * Failed promises are retried a specified number of times before returning the error.
 *
 * @param promises - The array of promises to resolve.
 * @param retries - The number of retries for each failed promise (default: 0).
 * @returns An object with `results` (successful promises) and `errors` (failed promises).
 *
 * @example
 * const promises = [Promise.resolve(1), Promise.reject('error')];
 * resolvePromisesWithResults(promises);
 * // Output: { results: [1], errors: ['error'] }
 */
export const resolvePromisesWithResults = async <T>(
    promises: Array<() => Promise<T>>,
    retries: number = 0
): Promise<{ results: T[]; errors: any[] }> => {
    const results: T[] = [];
    const errors: any[] = [];

    await Promise.all(
        promises.map(async (promiseFn, index) => {
            try {
                const result = await autoRetry(promiseFn, retries);
                results[index] = result;
            } catch (error) {
                errors[index] = error;
            }
        })
    );

    return { results, errors };
};
