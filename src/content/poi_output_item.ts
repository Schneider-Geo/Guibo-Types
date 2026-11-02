import { Context } from './context';
import { Icon } from './icon';

/** POI category in guidebook output (`PoiOutputItemDTO.PoiType`). */
export type PoiOutputType =
    | 'POI'
    | 'PARKING'
    | 'FOOD'
    | 'ACCOMMODATION'
    | 'SHOP'
    | 'SIGHT'
    | 'ATTENTION'
    | 'DESTINATION'
    | 'SETTLEMENT'
    | 'SPORTS'
    | 'CULTURE'
    | 'RECREATION'
    | 'EMERGENCY'
    | 'PUBLIC_TRANSPORT';

export interface PoiAlongRouteDTO {
    poi?: string;
    route?: string;
    routeName?: string;
    distanceFromStart?: number;
}

/** Localized POI as returned by guidebook output (`PoiOutputItemDTO`). */
export interface PoiOutputItemDTO {
    link?: string;
    name?: string;
    description?: string;
    type?: PoiOutputType;
    images?: string[];
    lat?: number;
    lon?: number;
    web?: string;
    phone?: string;
    distanceFromStart?: number;
    highlighted?: boolean;
    alongRoutes?: PoiAlongRouteDTO[];
    context?: Context;
    names?: Record<string, string>;
    descriptions?: Record<string, string>;
    icon?: Icon;
    bundle?: string;
    remark?: string;
    visitingInfo?: string;
}
