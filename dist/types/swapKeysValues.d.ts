/**
 * Swaps the keys and values of an object. Keys become values and values become keys.
 * Assumes all values are unique and can be used as keys.
 *
 * @param obj - The object to swap keys and values.
 * @returns A new object with keys and values swapped.
 *
 * @example
 * swapKeysValues({ a: 1, b: 2 });
 * // Output: { 1: 'a', 2: 'b' }
 */
export declare const swapKeysValues: (obj: Record<string, any>) => Record<string, any>;
