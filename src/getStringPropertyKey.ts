/**
 * Returns the string property key of a given type.
 * Ensures the key corresponds to a string property of the given type.
 *
 * @param key - The key of the string property to return
 * @returns The same key if it corresponds to a string property
 *
 * @example
 *
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age?: number;
 * }
 *
 * class Person {
 *   id: number;
 *   firstName: string;
 *   lastName: string;
 *   age: number;
 * }
 *
 * // Example 1: Working with an interface (User)
 * const nameKey = getStringPropertyKey<User>('name');  // Valid key
 * console.log(nameKey);  // Output: 'name'
 *
 * // Example 2: Working with a class (Person)
 * const firstNameKey = getStringPropertyKey<Person>('firstName');  // Valid key
 * console.log(firstNameKey);  // Output: 'firstName'
 *
 * // Invalid key examples (TypeScript will prevent them at compile time):
 * // const invalidKey = getStringPropertyKey<User>('id');  // Error: 'id' is not a string property
 */
export const getStringPropertyKey = <
    T extends object,
    K extends keyof T
>(key: K): K => {
    return key; // Simply return the key
};
