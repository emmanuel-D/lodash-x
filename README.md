# 🚀 LodashX

**LodashX** is a small collection of utility functions for JavaScript and TypeScript projects. The library is designed to make it easier to perform common operations on arrays and objects.

ℹ️ Some functions in the library are based on Lodash, hence, it is required to install Lodash as a dependency.

## 📦 Installation
You can install **LodashX** by using npm:

```
npm i lodash-x
```

## 💡 Usage
To use LodashX in your project, simply import the functions you need. For example:

###Javascript
````javascript
import {updateOrAddItemToArray} from "lodash-x";

const array = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
];

const newItem = {id: 3, name: 'Item 3'};

updateOrAddItemToArray(array, newItem);

console.log(array);
// Output: [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}]
````

###Typescript
````typescript
import {updateOrAddItemToArray} from "lodash-x";

const array: {id: number, name: string}[] = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
];

const newItem = {id: 3, name: 'Item 3'};

updateOrAddItemToArray(array, newItem);

console.log(array);
// Output: [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}]

````

## 📚 API Reference

### `updateOrAddItemToArray`
Updates an existing item in an array or adds it if it doesn't exist.
```
updateOrAddItemToArray<T>(array: T[], item: T, searchPropertyKey: keyof T = 'id'): T[]
```
Example
```javascript
import {updateOrAddItemToArray} from "lodash-x";

const array = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
];

const newItem = {id: 3, name: 'Item 3'};

updateOrAddItemToArray(array, newItem);

console.log(array);
// Output: [{id: 1, name: 'Item 1'}, {id: 2, name: 'Item 2'}, {id: 3, name: 'Item 3'}]

```
___
### `updateOrAddItemListToArray`
Updates an existing item list in an array or adds it if it doesn't exist.
```
updateOrAddItemListToArray<T>(array: T[], itemList: T[], searchPropertyKey: keyof T = 'id'): T[]
```
Example:
```javascript
import {updateOrAddItemListToArray} from "./updateOrAddItemListToArray";

const array = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Jane Doe"}
];

const newItemList = [
    {id: 3, name: "Jack Doe"},
    {id: 1, name: "John Doe Updated"}
];

const updatedArray = updateOrAddItemListToArray(array, newItemList);

console.log(updatedArray);
// Output: [
//  {id: 1, name: "John Doe Updated"},
//  {id: 2, name: "Jane Doe"},
//  {id: 3, name: "Jack Doe"}
// ]
```
___
### `removeItemFromArrayAtIndex`
Removes an item at given index and returns a copy of the array without the removed item.
```
removeItemFromArrayAtIndex<T>(array: T[], index: number): T[]
```
Example
```javascript
const arr = [1, 2, 3, 4];
const removedArr = removeItemFromArrayAtIndex(arr, 2);  
console.log(removedArr);  
// Output: [1, 2, 4]
```
___
### `doesArrayContainsOneOrMore`
Check if the given array contains one or more primitive elements that are equal to the primitive elements given as a second parameter. This implementation is more performant than using Array.every or Array.some as it uses a loop instead of a higher order function.
```
doesArrayContainsOneOrMore<T>(array: (string | number)[], elements: (string | number)[]): boolean
```
Example
```javascript
const fruits = ['apple', 'banana', 'orange'];
const elements = ['apple', 'pear'];
console.log(containsAny(fruits, elements));
// Output: true
```
___
### `doesArrayContainsOneOrMoreObjects`
Check if an array of objects contains one or more elements based on a specific property.
```
doesArrayContainsOneOrMoreObjects<T>(
    array: T[],
    elements: T[],
    keyToCompare: keyof T
): boolean
```
Example
```javascript
const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Jim' }];
const elements = [{ id: 2, name: 'Jane' }, { id: 4, name: 'Jessica' }];  
const keyToCompare = 'id';  
const result = containsOneOrMoreObjects(array, elements, keyToCompare); 
console.log(result); 
// Output: true
```
___

### `generateRandomAlphaNumericString`
Generates a random alphanumeric string with a specified length.
```
generateRandomAlphaNumericString(length: number): string
```
Example
````javascript
const randomString = generateRandomStringWithSections(3, 4);
console.log(randomString);
// Output: "abcd-g13d-93fb"
````
___
### `generateRandomStringWithSections`
Generates a random string with sections separated by a dash.
```
generateRandomStringWithSections(sections: number, sectionLength: number): string
```
Example
```javascript
const randomString = generateRandomStringWithSections(3, 4);
console.log(randomString);
// Output: "abcd-g13d-93fb"
```
___

### `getRandomItemInArray`
This method returns a random item from the given array. If startIndex and/or endIndex are provided, the random item will be selected only from the range of indexes between startIndex and endIndex, inclusive. If startIndex is not provided, it defaults to 0. If endIndex is not provided, it defaults to the last index of the array.

`getRandomItemInArray(startIndex?: number, endIndex?: number): T
`

Parameters:
- `startIndex?: number (optional)` - The index of the array to start the range of random selection. Defaults to 0 if not provided.
- `endIndex?: number (optional)` - The index of the array to end the range of random selection. Defaults to the last index of the array if not provided.

Returns:
A random item from the given array.

Example
``` typescript
const array = [1, 2, 3, 4, 5];
const randomItem = getRandomItemInArray(1, 3); // Returns a random item from the range of indexes between 1 and 3.
```
___

### `generateRandomNumber`
This method generates a random number between start and end, inclusive. If start is not provided, it defaults to 0. If end is not provided, it defaults to `Number.MAX_SAFE_INTEGER`. If `isFloat` is set to true, the generated number will be a floating point number with up to 2 decimal places.

`generateRandomNumber(start?: number, end?: number, isFloat?: boolean): number
`

Parameters:
- `start?: number (optional)` - The minimum value of the range to generate the random number from. Defaults to 0 if not provided.
- `end?: number (optional)` - The maximum value of the range to generate the random number from. Defaults to `Number.MAX_SAFE_INTEGER` if not provided.
- `isFloat?: boolean (optional)` - If set to true, the generated number will be a floating point number with up to 2 decimal places. Defaults to false if not provided.

Returns:
A random number between start and end, inclusive.

Example
``` typescript
const randomNumber = generateRandomNumber(1, 10, true); // Returns a random floating point number between 1 and 10, with up to 2 decimal places.
```
___

## 🙌 Contributing
If you have any suggestions for improving LodashX or if you found a bug, please don't hesitate to open an issue. Contributions are welcome!

Special thanks to everyone who has contributed to this project!

[![Emmanuel Dadem](https://avatars.githubusercontent.com/u/37305687?s=80&v=4)](https://github.com/emmanuel-D)

## 🎉 License
**LodashX** is open source and licensed under the MIT license.
