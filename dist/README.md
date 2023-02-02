#🚀 LodashX

**LodashX** is a small collection of utility functions for JavaScript and TypeScript projects. The library is designed to make it easier to perform common operations on arrays and objects.

ℹ️ Some functions in the library are based on Lodash, hence, it is required to install Lodash as a dependency.

##📦 Installation
You can install **LodashX** by using npm:

```
npm i lodash-x
```

##💡 Usage
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

##📚 API Reference

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

##🙌 Contributing
If you have any suggestions for improving LodashX or if you found a bug, please don't hesitate to open an issue. Contributions are welcome!

##🎉 License
**LodashX** is open source and licensed under the MIT license.
