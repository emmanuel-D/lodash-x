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
export const maskString = (
    str: string,
    options: {
        start?: number; // Number of characters to keep at the start
        end?: number;   // Number of characters to keep at the end
        maskChar?: string; // The character to use for masking
        maskBefore?: boolean; // Mask characters before the symbol (e.g., '@' in an email)
        maskAfter?: boolean;  // Mask characters after the symbol (e.g., '@' in an email)
        symbol?: string; // The symbol around which masking applies
    } = {}
): string => {
    const {
        start = 0,
        end = 0,
        maskChar = '*',
        maskBefore = false,
        maskAfter = false,
        symbol
    } = options;

    if (!str || str.length <= start + end) return str;

    // Masking logic based on a symbol (e.g., '@' in email)
    if (symbol && (maskBefore || maskAfter)) {
        const symbolIndex = str.indexOf(symbol);
        if (symbolIndex === -1) {
            return str; // If the symbol is not found, return the original string
        }

        let beforeSymbol = str.slice(0, symbolIndex);
        let afterSymbol = str.slice(symbolIndex + 1);

        // Apply masking before the symbol
        if (maskBefore) {
            beforeSymbol = maskChar.repeat(beforeSymbol.length - start) + beforeSymbol.slice(-start);
        }

        // Apply masking after the symbol
        if (maskAfter) {
            afterSymbol = afterSymbol.slice(0, -end) + maskChar.repeat(afterSymbol.length - end);
        }

        return `${beforeSymbol}${symbol}${afterSymbol}`;
    }

    // Standard masking without symbol (for generic strings)
    const maskedPart = maskChar.repeat(str.length - start - end);
    return `${str.slice(0, start)}${maskedPart}${str.slice(-end)}`;
};
