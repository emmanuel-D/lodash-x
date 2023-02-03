/**
 * Check if the given array contains one or more primitive elements that are equal to the primitive elements given as a second parameter.
 * This implementation is more performant than using `Array.every` or `Array.some` as it uses a loop instead of a higher order function.
 * @param array The array to search in.
 * @param elements The elements to search for.
 * @returns True if one or more elements were found, false otherwise.
 *
 *  @example
 *  const fruits = ['apple', 'banana', 'orange']
 *  const elements = ['apple', 'pear']
 *
 *  console.log(containsAny(fruits, elements))
 *  // Output: true
 */
export declare function doesArrayContainsOneOrMore<T>(array: (string | number)[], elements: (string | number)[]): boolean;
