/**
 * Creates a function that can only be called once. Subsequent calls will throw an error.
 *
 * @param fn - The function to wrap.
 * @returns A new function that throws if called more than once.
 *
 * @example
 * const initialize = onceStrict(() => console.log('Initialized'));
 * initialize(); // Logs: "Initialized"
 * initialize(); // Throws: Error: Function can only be called once
 */
export const onceStrict = <T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> => {
    let called = false;

    return function (this: any, ...args: Parameters<T>): ReturnType<T> {
        if (called) throw new Error('Function can only be called once');
        called = true;
        return fn.apply(this, args);
    };
};
