import type { TranslationObject } from "../core/types";

export const getNestedValue = (
    obj: TranslationObject,
    path: string
): string | TranslationObject | undefined => {
    return path.split(".").reduce<string | TranslationObject | undefined>(
        (acc, key) => {
            if (
                acc &&
                typeof acc === "object" &&
                !Array.isArray(acc) &&
                key in acc
            ) {
                return acc[key];
            }

            return undefined;
        },
        obj
    );
};