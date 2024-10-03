/**
 * Masks part of a string for privacy, with flexible control over where and how to mask.
 * Useful for email addresses, phone numbers, credit card numbers, etc.
 *
 * @param str - The string to mask (e.g., "johndoe@example.com").
 * @param options - Options for customizing the mask.
 * @param options.start - The number of characters to keep at the start of the string (default: 0).
 * @param options.end - The number of characters to keep at the end of the string (default: 0).
 * @param options.maskChar - The character to use for masking (default: "*").
 * @param options.maskBefore - If true, mask the characters before a specific symbol (e.g., '@' in an email).
 * @param options.maskAfter - If true, mask the characters after a specific symbol (e.g., '@' in an email).
 * @param options.symbol - The character before or after which masking applies (e.g., '@' for emails).
 * @returns The masked string.
 *
 * @example
 * maskString('johndoe@example.com', { start: 1, end: 4, symbol: '@', maskBefore: true });
 * // Output: "j********@example.com"
 *
 * @example
 * maskString('123-456-7890', { start: 0, end: 4, maskChar: '#', symbol: '-', maskAfter: true });
 * // Output: "123-###-####"
 */
export declare const maskString: (str: string, options?: {
    start?: number;
    end?: number;
    maskChar?: string;
    maskBefore?: boolean;
    maskAfter?: boolean;
    symbol?: string;
}) => string;
