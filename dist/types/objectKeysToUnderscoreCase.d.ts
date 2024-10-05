/**
 * Recursively converts all keys of an object to underscore_case.
 *
 * @param obj - The object to convert
 * @returns A new object with underscore_case keys
 *
 * @example
 *
 * const obj = { userName: 'John Doe', userDetails: { userAge: 30 } };
 * console.log(objectKeysToUnderscoreCase(obj));
 * // Output: { user_name: 'John Doe', user_details: { user_age: 30 } }
 */
export declare const objectKeysToUnderscoreCase: (obj: any) => any;
