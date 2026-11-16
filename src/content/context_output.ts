import { Channel } from './channel';

/**
 * Context of an item in the output of a guidebook (stages, spaces, unplaced content).
 * Internal information, only delivered on request (includeContext=true).
 * Unlike Context it has no category: the position of the item is given by the structure of the output.
 */
export interface ContextOutput {
    reference: boolean;
    referenceAutomated: boolean;
    releaseContent: boolean;
    referenceId?: string;
    /** The bundle the item lives in (where it was created). */
    homeBundle?: string;
    /** The bundle the item is living in in this context. Differs from homeBundle if the item is a reference. */
    contextBundle?: string;
    sorting?: number;
    group?: string;
    groupSorting?: number;
    /** Visibility per GUIBO channel (1 = visible, 0 = hidden). */
    visibility?: Partial<Record<Channel, number>>;
    guideOnly: boolean;
    highlight: boolean;
}
