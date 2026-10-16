import { Figures } from './figures';
import { PoiOutputItemDTO } from './poi_output_item';
import { Waypoint } from './waypoint';

/** Route kind in guidebook output (`RouteOutputItemDTO.RouteType`). */
export type RouteOutputType = 'HIKING' | 'CYCLING' | 'WALKING' | 'DRIVING' | 'TRANSFER';

/** Nearby-accommodation hint on a route (`AccommodationRadiusInfoDTO`). */
export interface AccommodationRadiusInfoDTO {
    radiusKm?: number;
    accommodationLink?: string;
    poiLink?: string;
}

/** Navigation-point reference on a waypoint (`NaviPointReferenceDTO`; JSON field `m`). */
export interface NaviPointReferenceDTO {
    m?: number;
    uid?: string;
}

/** Route waypoint in guidebook output (`RouteWaypointDTO`). */
export interface RouteOutputWaypoint extends Waypoint {
    nn?: NaviPointReferenceDTO[];
}

/** Localized route as returned by guidebook output (`RouteOutputItemDTO`). */
export interface RouteOutputItemDTO {
    link?: string;
    name?: string;
    description?: string;
    type?: RouteOutputType;
    figures?: Figures;
    images?: string[];
    onTheWay?: PoiOutputItemDTO[];
    settlements?: PoiOutputItemDTO[];
    waypoints?: RouteOutputWaypoint[];
    accommodationRadiusInfo?: AccommodationRadiusInfoDTO;
}
