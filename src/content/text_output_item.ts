import { Context } from './context';

/** Localized text page as returned by guidebook output (`TextOutputItemDTO`). */
export interface TextOutputItemDTO {
    id?: number;
    link?: string;
    name?: string;
    description?: string;
    context?: Context;
    names?: Record<string, string>;
    descriptions?: Record<string, string>;
    bundle?: string;
    remark?: string;
    separator?: boolean;
}
