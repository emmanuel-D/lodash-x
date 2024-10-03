/**
 * Maps over an array of async functions sequentially.
 *
 * @param arr - The array to map over.
 * @param fn - The async function to apply to each item.
 * @returns A Promise that resolves to an array of the mapped values.
 *
 * @example
 * asyncMap([1, 2, 3], async (n) => n * 2);
 * // Output: [2, 4, 6]
 */
export declare const asyncMapSequential: <T, R>(arr: T[], fn: (item: T, index: number) => Promise<R>) => Promise<R[]>;