"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceWithImmediate = void 0;
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
const debounceWithImmediate = (fn, wait, immediate = false) => {
    let timeout;
    return function (...args) {
        const callNow = immediate && !timeout;
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate)
                fn.apply(this, args);
        }, wait);
        if (callNow)
            fn.apply(this, args);
    };
};
exports.debounceWithImmediate = debounceWithImmediate;
