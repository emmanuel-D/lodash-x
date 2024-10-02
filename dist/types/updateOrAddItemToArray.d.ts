import { NestedPaths } from "./types";
/**
 * Updates an existing item in an array based on a nested search property, or adds it if it doesn't exist.
 * Supports optional unshifting (adding to the start of the array).
 *
 * @param array - The array to update or add to.
 * @param item - The item to update or add.
 * @param searchPropertyKey - The key (or nested key) of the property to search by.
 * @param unshift - If true, adds the item to the start of the array (default: false).
 * @returns A new array with the updated or added item.
 *
 * @example
 * const array = [{ id: 1, user: { profile: { id: 2 } } }];
 * const newItem = { id: 1, user: { profile: { id: 3 } } };
 * const updatedArray = updateOrAddItemToArray(array, newItem, 'user.profile.id');
 * // Output: [{ id: 1, user: { profile: { id: 3 } } }]
 */
export declare function updateOrAddItemToArray<T>(array: T[], item: T, searchPropertyKey: NestedPaths<T>, unshift?: boolean): T[];
