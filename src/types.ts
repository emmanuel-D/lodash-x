//@ts-nocheck

// Utility to join keys for nested paths
export type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}.${P}` : never) : never;

// Utility to generate all possible nested paths within an object
export type NestedPaths<T> = T extends object
    ? {
        [K in keyof T]: T[K] extends object ? K | Join<K, NestedPaths<T[K]>> : K;
    }[keyof T]
    : never;
