"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncMapParallel = void 0;
/**
 * Maps over an array of async functions in parallel.
 *
 * @param arr - The array to map over.
 * @param fn - The async function to apply to each item.
 * @returns A Promise that resolves to an array of the mapped values.
 *
 * @example
 * asyncMapParallel([1, 2, 3], async (n) => n * 2);
 * // Output: [2, 4, 6]
 */
const asyncMapParallel = async (arr, fn) => {
    return Promise.all(arr.map(fn));
};
exports.asyncMapParallel = asyncMapParallel;
