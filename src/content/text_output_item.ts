import { ContextOutput } from './context_output';

/** Localized text page as returned by guidebook output (`TextOutputItemDTO`). */
export interface TextOutputItemDTO {
    id?: number;
    link?: string;
    name?: string;
    description?: string;
    context?: ContextOutput;
    names?: Record<string, string>;
    descriptions?: Record<string, string>;
    remark?: string;
    separator?: boolean;
}
