/**
 * The `updateOrAddItemToArray` function is a utility function that allows you to update an item in an array or add a new item to the array, based on a specified search property. The function takes in three parameters:
 *
 * @param array: An array of any type T.
 *
 * @param item: An item of type T that you want to add to the array or update if it already exists in the array.
 *
 * @param searchPropertyKey (optional): A string or a key of type keyof T that represents the property of the items in the array that should be used for comparison. By default, this value is set to "id".
 *
 * The function first uses the findIndex method to find the index of the item in the array based on the value of the searchPropertyKey property. If the item is found, the function updates the item at that index in the array. If the item is not found, the function adds the item to the end of the array.
 *
 * Finally, the function returns a new array that is created using the spread operator `...` to ensure that the returned array is a new instance and not a reference to the original array.
 *
 * This function makes use of the Lodash library, specifically the `_.get` method, which allows you to safely access properties of an object, even if they are deeply nested.
 *
 * Here is an example of how you might use the updateOrAddItemToArray function in your code:
 *
 * In this case, the item is being updated :
 *
 * ````
 * const originalArray = [
 *   { id: 1, name: 'John Doe' },
 *   { id: 2, name: 'Jane Doe' },
 * ];
 *
 * const updatedArray = updateOrAddItemToArray(originalArray, { id: 2, name: 'Jane Smith' });
 *
 * console.log(originalArray);
 * // Output: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
 *
 * console.log(updatedArray);
 * // Output: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *````
 *
 * Another example where the item is being added
 *
 * ````
 * const originalArray = [  { id: 1, name: 'John Doe' },  { id: 2, name: 'Jane Doe' },];
 *
 * const updatedArray1 = updateOrAddItemToArray(originalArray, { id: 2, name: 'Jane Smith' });
 * console.log(updatedArray1);
 * // Output: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }]
 *
 * const updatedArray2 = updateOrAddItemToArray(updatedArray1, { id: 3, name: 'John Smith' });
 * console.log(updatedArray2);
 * // Output: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }, { id: 3, name: 'John Smith' }]
 * ````
 *
 * @param array
 * @param item
 * @param searchPropertyKey
 */
export declare function updateOrAddItemToArray<T>(array: T[], item: T, searchPropertyKey?: (string | keyof T)): T[];
