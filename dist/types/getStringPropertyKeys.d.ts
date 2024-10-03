/**
 * Returns a list of string property keys from the provided list of keys.
 * Ensures that the keys correspond to string properties of the given type.
 *
 * @param keys - An array of keys to return
 * @returns The same array of valid string keys
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
 * const userStringKeys = getStringPropertyKeys<User>(['name', 'email']);  // Valid keys
 * console.log(userStringKeys);  // Output: ['name', 'email']
 *
 * // Example 2: Working with a class (Person)
 * const personStringKeys = getStringPropertyKeys<Person>(['firstName', 'lastName']);  // Valid keys
 * console.log(personStringKeys);  // Output: ['firstName', 'lastName']
 *
 */
export declare const getStringPropertyKeys: <T extends object, K extends keyof T>(keys: K[]) => K[];
