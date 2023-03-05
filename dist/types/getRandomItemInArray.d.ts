/**
 * Returns a random item from the given array.
 *
 * @param array The array from which to retrieve a random item.
 * @param startIndex Optional start index for the slice of the array to choose from (inclusive). Defaults to 0.
 * @param endIndex Optional end index for the slice of the array to choose from (exclusive). Defaults to the length of the array.
 * @returns A randomly chosen item from the given array slice, or null if the slice is empty or invalid.
 */
export declare function getRandomItemInArray<T>(array: T[], startIndex?: number, endIndex?: number): T | null;
