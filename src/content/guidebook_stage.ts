import { ContextBase } from './context_base';
import { PoiOutputItemDTO } from './poi_output_item';
import { RouteOutputItemDTO } from './route_output_item';
import { ServiceItemOutputDTO } from './service_item_output';
import { TextOutputItemDTO } from './text_output_item';

/**
 * One stage of a guidebook as returned by `GET guidebook/{id}` (`GuidebookStageDTO`).
 * `date` is ISO `yyyy-MM-dd`.
 */
export interface GuidebookStageDTO {
    number: number;
    link?: string;
    customId?: string;
    /** Name in the requested language (only if a language was requested). */
    name?: string;
    /** Names per language (only if no language was requested). */
    names?: { [lang: string]: string };
    date?: string;
    destination?: PoiOutputItemDTO;
    accommodation?: ServiceItemOutputDTO;
    routes?: RouteOutputItemDTO[];
    pois?: PoiOutputItemDTO[];
    agendaPois?: PoiOutputItemDTO[];
    niceToKnowPois?: PoiOutputItemDTO[];
    markers?: PoiOutputItemDTO[];
    transfers?: RouteOutputItemDTO[];
    activities?: ServiceItemOutputDTO[];
    texts?: TextOutputItemDTO[];
    context?: ContextBase;
}
