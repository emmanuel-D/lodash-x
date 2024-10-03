"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncMapSequential = void 0;
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
const asyncMapSequential = async (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(await fn(arr[i], i));
    }
    return result;
};
exports.asyncMapSequential = asyncMapSequential;
