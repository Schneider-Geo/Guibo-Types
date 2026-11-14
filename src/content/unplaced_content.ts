import { PoiOutputItemDTO } from './poi_output_item';
import { RouteOutputItemDTO } from './route_output_item';

/**
 * Why a geodata object is unplaced (`UnplacedItemDTO.Reason`).
 * NO_SPACE_NO_STAGE: neither a space nor a stage; UNKNOWN_STAGE: refers to a stage that does not exist in the guidebook.
 */
export type UnplacedReason = 'NO_SPACE_NO_STAGE' | 'UNKNOWN_STAGE';

/** A geodata object placed neither at the root of a space nor in an existing stage (`UnplacedItemDTO`). */
export interface UnplacedItemDTO<T> {
    reason: UnplacedReason;
    /** Link of the non-existing stage (only for UNKNOWN_STAGE). */
    category?: string;
    item: T;
}

/**
 * Geodata of a guidebook that is placed neither at the root of a space nor in an existing stage,
 * as returned by `GET guidebook/{id}/unplaced` (`UnplacedContentDTO`). These are data errors the user has to fix.
 */
export interface UnplacedContentDTO {
    routes: UnplacedItemDTO<RouteOutputItemDTO>[];
    transfers: UnplacedItemDTO<RouteOutputItemDTO>[];
    pois: UnplacedItemDTO<PoiOutputItemDTO>[];
}
