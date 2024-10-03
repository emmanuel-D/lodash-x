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
export declare const resolvePromisesWithResults: <T>(promises: (() => Promise<T>)[], retries?: number) => Promise<{
    results: T[];
    errors: any[];
}>;
