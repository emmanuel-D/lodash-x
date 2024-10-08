//@ts-nocheck
import { updateOrAddItemToArray } from "./updateOrAddItemToArray";
import { updateOrAddItemListToArray } from "./updateOrAddItemListToArray";
import { generateRandomAlphaNumericString } from "./generateRandomAlphaNumericString";
import { generateRandomStringWithSections } from "./generateRandomStringWithSections";
import { removeItemFromArrayAtIndex } from "./removeItemFromArrayAtIndex";
import { doesArrayContainsOneOrMore } from "./doesArrayContainsOneOrMore";
import { doesArrayContainsOneOrMoreObjects } from "./doesArrayContainsOneOrMoreObjects";
import { generateRandomNumber } from "./generateRandomNumber";
import { getRandomItemInArray } from "./getRandomItemInArray";
import { prettyPrintJSON } from "./prettyPrintJSON";
import { asyncMapParallel } from "./asyncMapParallel";
import { getFullName } from "./getFullName";
import { asyncMapSequential } from "./asyncMapSequential";
import { parseJSONSafe } from "./parseJSONSafe";
import { getUsernameBackgroundColor } from "./getUsernameBackgroundColor";
import { sleep } from "./sleep";
import { maskString } from "./maskString";
import { debounceWithImmediate } from "./debounceWithImmediate";
import { getAvatarInitials } from "./getAvatarInitials";
import { onceStrict } from "./onceStrict";
import { getValueByPath } from "./getValueByPath";
import { swapKeysValues } from "./swapKeysValues";
import { autoRetry } from "./autoRetry";
import { resolvePromisesWithResults } from "./resolvePromisesWithResults";
import { deepMergeSafe } from "./deepMergeSafe";
import { reParse } from "./reParse";
import { toString } from "./toString";
import { updateImmutable } from "./updateImmutable";
import { waitFor } from "./waitFor";
import { getStringPropertyKey } from "./getStringPropertyKey";
import { getStringPropertyKeys } from "./getStringPropertyKeys";
import { noop } from "./noop";
import { camelToTitleCase } from "./camelToTitleCase";
import { camelToUnderscore } from "./camelToUnderscore";
import { objectKeysToCamelCase } from "./objectKeysToCamelCase";
import { objectKeysToUnderscoreCase } from "./objectKeysToUnderscoreCase";
import { underscoreToNormal } from "./underscoreToNormal";
export { asyncMapParallel };
export { asyncMapSequential };
export { autoRetry };
export { camelToTitleCase };
export { camelToUnderscore };
export { debounceWithImmediate };
export { deepMergeSafe };
export { doesArrayContainsOneOrMore };
export { doesArrayContainsOneOrMoreObjects };
export { generateRandomAlphaNumericString };
export { generateRandomNumber };
export { generateRandomStringWithSections };
export { getAvatarInitials };
export { getFullName };
export { getRandomItemInArray };
export { getStringPropertyKey };
export { getStringPropertyKeys };
export { getUsernameBackgroundColor };
export { getValueByPath };
export { maskString };
export { noop };
export { objectKeysToCamelCase };
export { objectKeysToUnderscoreCase };
export { onceStrict };
export { parseJSONSafe };
export { prettyPrintJSON };
export { reParse };
export { removeItemFromArrayAtIndex };
export { resolvePromisesWithResults };
export { sleep };
export { swapKeysValues };
export { toString };
export { underscoreToNormal };
export { updateImmutable };
export { updateOrAddItemListToArray };
export { updateOrAddItemToArray };
export { waitFor };
declare const _x: {
    asyncMapParallel: <T, R>(arr: T[], fn: (item: T, index: number) => Promise<R>) => Promise<R[]>;
    asyncMapSequential: <T_1, R_1>(arr: T_1[], fn: (item: T_1, index: number) => Promise<R_1>) => Promise<R_1[]>;
    autoRetry: <T_2>(fn: () => Promise<T_2>, retries?: number, delay?: number) => Promise<T_2>;
    camelToTitleCase: (str: string) => string;
    camelToUnderscore: (str: string) => string;
    debounceWithImmediate: <T_3 extends (...args: any[]) => any>(fn: T_3, wait: number, immediate?: boolean) => (...args: Parameters<T_3>) => void;
    deepMergeSafe: (target: any, source: any) => any;
    doesArrayContainsOneOrMore: typeof doesArrayContainsOneOrMore;
    doesArrayContainsOneOrMoreObjects: typeof doesArrayContainsOneOrMoreObjects;
    generateRandomAlphaNumericString: typeof generateRandomAlphaNumericString;
    generateRandomNumber: typeof generateRandomNumber;
    generateRandomStringWithSections: typeof generateRandomStringWithSections;
    getAvatarInitials: (username?: string | undefined, length?: number) => string;
    getFullName: typeof getFullName;
    getRandomItemInArray: typeof getRandomItemInArray;
    getStringPropertyKey: <T_4 extends object, K extends keyof T_4>(key: K) => K;
    getStringPropertyKeys: <T_5 extends object, K_1 extends keyof T_5>(keys: K_1[]) => K_1[];
    getUsernameBackgroundColor: (username: string) => string;
    getValueByPath: <T_6, P extends import("./types").NestedPaths<T_6>>(obj: T_6, path: P) => P extends import("./types").NestedPaths<T_6> ? any : undefined;
    maskString: (str: string, options?: {
        start?: number | undefined;
        end?: number | undefined;
        maskChar?: string | undefined;
        maskBefore?: boolean | undefined;
        maskAfter?: boolean | undefined;
        symbol?: string | undefined;
    }) => string;
    noop: () => void;
    objectKeysToCamelCase: (obj: any) => any;
    objectKeysToUnderscoreCase: (obj: any) => any;
    onceStrict: <T_7 extends (...args: any[]) => any>(fn: T_7) => (...args: Parameters<T_7>) => ReturnType<T_7>;
    parseJSONSafe: (jsonString: string, fallback?: any) => any;
    prettyPrintJSON: (obj: any) => string;
    reParse: <T_8>(obj: T_8) => T_8;
    removeItemFromArrayAtIndex: typeof removeItemFromArrayAtIndex;
    resolvePromisesWithResults: <T_9>(promises: (() => Promise<T_9>)[], retries?: number) => Promise<{
        results: T_9[];
        errors: any[];
    }>;
    sleep: (ms: number) => Promise<void>;
    swapKeysValues: (obj: Record<string, any>) => Record<string, any>;
    toString: (value: any, seen?: Set<any>) => string;
    underscoreToNormal: (str: string, capitalizeAll?: boolean) => string;
    updateImmutable: <T_10, V>(obj: T_10, path: import("./types").NestedPaths<T_10>, value: V) => T_10;
    updateOrAddItemListToArray: typeof updateOrAddItemListToArray;
    updateOrAddItemToArray: typeof updateOrAddItemToArray;
    waitFor: (condition: () => boolean, interval?: number, timeout?: number) => Promise<void>;
};
export default _x;
