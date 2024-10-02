import {NestedPaths} from "./types";

/**
 * Immutably updates a deeply nested value in an object, with type-safe paths.
 *
 * @param obj - The original object to update.
 * @param path - The path to the property to update, as a string (auto-completed).
 * @param value - The new value to set at the specified path.
 * @returns A new object with the updated value.
 *
 * @example
 * updateImmutable({ a: { b: { c: 1 } } }, 'a.b.c', 2);
 * // Output: { a: { b: { c: 2 } } }
 */
export const updateImmutable = <T, V>(obj: T, path: NestedPaths<T>, value: V): T => {
    // @ts-ignore
    const keys = path.split('.').flatMap(part => part.match(/([^[\]]+)/g) || []); // Handles array indexers like addresses[0]
    const newObj = { ...obj }; // Start with a shallow copy of the object

    let current: any = newObj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i] as keyof typeof current;

        // If current[key] doesn't exist, create either an array or an object
        current[key] = current[key]
            ? { ...(current[key]) }
            : isNaN(Number(keys[i + 1])) ? {} : []; // Create array if next key is a number, otherwise an object

        current = current[key];
    }

    // Set the final value
    const finalKey = keys[keys.length - 1] as keyof typeof current;
    current[finalKey] = value;

    return newObj; // Return the updated object
};

