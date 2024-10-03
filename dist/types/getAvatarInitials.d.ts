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
export declare const getAvatarInitials: (username?: string, length?: number) => string;
