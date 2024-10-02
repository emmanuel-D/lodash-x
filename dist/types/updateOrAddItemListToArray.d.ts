import { NestedPaths } from "./types";
/**
 * Updates or adds multiple items to an array based on a search property.
 * Supports nested properties and immutability.
 *
 * @param array - The array to update or add to.
 * @param newItemList - The list of new items to update or add.
 * @param searchPropertyKey - The key (or nested key) of the property to search by (default: 'id').
 * @param unshift - If true, adds new items to the start of the array (default: false).
 * @returns A new array with the updated or added items.
 *
 * @example
 * const array = [{ id: 1, name: 'Item 1' }];
 * const newItems = [{ id: 2, name: 'Item 2' }, { id: 1, name: 'Updated Item 1' }];
 * const updatedArray = updateOrAddItemListToArray(array, newItems, 'id');
 * // Output: [{ id: 1, name: 'Updated Item 1' }, { id: 2, name: 'Item 2' }]
 */
export declare function updateOrAddItemListToArray<T>(array: T[], newItemList: T[], searchPropertyKey: NestedPaths<T>, unshift?: boolean): T[];
