"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatarInitials = void 0;
/**
 * Returns initials for an avatar, based on the given username.
 * If a single word is provided (like 'John'), it returns the specified number of characters.
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
    let initials = '';
    // If there's only one word, take the first 'length' characters from it
    if (words.length === 1) {
        initials = words[0].slice(0, length).toUpperCase();
    }
    else {
        // Otherwise, take the first letter of each word, and limit to 'length' characters
        initials = words.map(word => word[0].toUpperCase()).join('').slice(0, length);
    }
    return initials;
};
exports.getAvatarInitials = getAvatarInitials;
