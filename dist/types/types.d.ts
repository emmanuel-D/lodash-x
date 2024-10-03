export type Join<K, P> = K extends string | number ? (P extends string | number ? `${K}.${P}` : never) : never;
export type NestedPaths<T> = T extends object ? {
    [K in keyof T]: T[K] extends object ? K | Join<K, NestedPaths<T[K]>> : K;
}[keyof T] : never;
