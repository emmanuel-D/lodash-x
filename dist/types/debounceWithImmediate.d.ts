/**
 * Creates a debounced function that delays the execution until after a wait time has passed.
 * Optionally, it triggers the function immediately on the first call.
 *
 * @param fn - The function to debounce.
 * @param wait - The number of milliseconds to wait before calling the function.
 * @param immediate - If true, triggers the function on the leading edge of the wait period.
 * @returns A debounced version of the function.
 *
 * @example
 * const debouncedFn = debounceWithImmediate(() => console.log('Called!'), 1000, true);
 * debouncedFn(); // Executes immediately, then debounces subsequent calls.
 */
export declare const debounceWithImmediate: <T extends (...args: any[]) => any>(fn: T, wait: number, immediate?: boolean) => (...args: Parameters<T>) => void;
