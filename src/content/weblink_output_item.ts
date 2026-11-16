import { ContextOutput } from './context_output';

/** Localized weblink as returned by guidebook output (`WeblinkOutputItemDTO`). */
export interface WeblinkOutputItemDTO {
    link?: string;
    name?: string;
    names?: Record<string, string>;
    url?: string;
    urls?: Record<string, string>;
    context?: ContextOutput;
}
