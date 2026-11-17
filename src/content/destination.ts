import { Location } from './location';

/**
 * A destination (place where a stage ends and the next one starts), as returned by the content service (`DestinationDTO`).
 */
export interface DestinationDTO {
    link: string;
    names?: { [lang: string]: string };
    location?: Partial<Location>;
    /** Number of outgoing routes per key. */
    outgoingRouteCount?: { [key: string]: number };
    type?: number;
}
