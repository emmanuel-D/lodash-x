"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatarInitials = void 0;
/**
 * Returns initials for an avatar, based on the given username.
 * The default is 2 characters, but this can be customized.
 *
 * @param username - The username from which to generate initials
 * @param length - The number of initials to return (default: 2)
 * @returns A string representing the initials, or '?' if no username is provided
 *
 * @example
 * getAvatarInitials('John Doe'); // Output: 'JD'
 * getAvatarInitials('John Doe', 1); // Output: 'J'
 * getAvatarInitials('A'); // Output: 'A'
 * getAvatarInitials(''); // Output: '?'
 */
const getAvatarInitials = (username, length = 2) => {
    if (!username)
        return '?'; // Fallback if username is empty or undefined
    // Split the username into words by spaces and take the first character of each word
    const words = username.trim().split(/\s+/);
    // Combine the first letter of each word to form the initials
    const initials = words.map(word => word[0].toUpperCase()).join('');
    // Return only the requested number of characters
    return initials.slice(0, length);
};
exports.getAvatarInitials = getAvatarInitials;
