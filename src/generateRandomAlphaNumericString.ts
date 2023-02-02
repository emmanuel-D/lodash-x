/**
 * Generates a random alphanumeric string of a given length.
 * @param length The length (default 10) of the desired random string.
 * @returns The generated random string.
 *
 *
 * @example
 * const randomString = generateRandomString(10);
 * console.log(randomString);
 * // Output: "V7mE9tJhO2"
 */
export function generateRandomAlphaNumericString(length: number = 10): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
