import { Context } from './context';

/** Localized weblink as returned by guidebook output (`WeblinkOutputItemDTO`). */
export interface WeblinkOutputItemDTO {
    link?: string;
    name?: string;
    names?: Record<string, string>;
    url?: string;
    urls?: Record<string, string>;
    bundle?: string;
    context?: Context;
}
