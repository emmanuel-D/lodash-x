/**
 * Recursively converts all keys of an object to camelCase.
 *
 * @param obj - The object to convert
 * @returns A new object with camelCase keys
 *
 * @example
 *
 * const obj = { user_name: 'John Doe', user_details: { user_age: 30 } };
 * console.log(objectKeysToCamelCase(obj));
 * // Output: { userName: 'John Doe', userDetails: { userAge: 30 } }
 */
export declare const objectKeysToCamelCase: (obj: any) => any;
