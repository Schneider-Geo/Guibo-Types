import { Channel } from './channel';

/** Context of a stage in the guidebook output (`ContextBaseDTO`): internal id, visibility per channel and sorting. */
export interface ContextBase {
    /** Internal id of the object (e.g. the category id of a stage). */
    id?: number;
    /** Visibility per GUIBO channel (1 = visible, 0 = hidden). */
    visibility?: Partial<Record<Channel, number>>;
    sorting?: number;
}
