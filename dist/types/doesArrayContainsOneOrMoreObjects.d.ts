import { NestedPaths } from "./types";
/**
 * Checks if the array contains one or more objects that match elements based on a specific key.
 * Supports nested properties for comparison.
 *
 * @param array - The array to check.
 * @param elements - The elements to look for in the array.
 * @param keyToCompare - The key (or nested key) to compare the objects by.
 * @returns True if the array contains one or more matching objects, false otherwise.
 *
 * @example
 * const array = [{ id: 1, user: { profile: { id: 2 } } }];
 * const elements = [{ id: 2, user: { profile: { id: 2 } } }];
 * doesArrayContainsOneOrMoreObjects(array, elements, 'user.profile.id');
 * // Output: true
 */
export declare function doesArrayContainsOneOrMoreObjects<T>(array: T[], elements: T[], keyToCompare: NestedPaths<T>): boolean;
