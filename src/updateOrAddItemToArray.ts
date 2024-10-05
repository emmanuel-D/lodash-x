//@ts-nocheck

import {NestedPaths} from "./types";

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
export function updateOrAddItemToArray<T>(
    array: T[],
    item: T,
    searchPropertyKey: NestedPaths<T>,
    unshift: boolean = false
): T[] {
    const getValueByPath = (obj: any, path: string): any => {
        return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
    };

    // @ts-ignore
    const itemKeyValue = getValueByPath(item, searchPropertyKey);

    // @ts-ignore
    const index = array.findIndex(x => getValueByPath(x, searchPropertyKey) === itemKeyValue);

    if (index !== -1) {
        // Item exists, return a new array with the updated item
        const updatedArray = [
            ...array.slice(0, index),
            { ...item },
            ...array.slice(index + 1)
        ];
        return updatedArray;
    } else {
        // Item doesn't exist, add it to the array (unshift or push)
        if (unshift) {
            return [item, ...array];
        }
        return [...array, item];
    }
}
