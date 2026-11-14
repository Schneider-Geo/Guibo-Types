import { Category } from './category';
import { PoiOutputItemDTO } from './poi_output_item';
import { RouteOutputItemDTO } from './route_output_item';
import { TextOutputItemDTO } from './text_output_item';
import { WeblinkOutputItemDTO } from './weblink_output_item';

/** Content of one guidebook space as returned by `GET guidebook/{id}/space/{space}` (`GuidebookSpaceDTO`). */
export interface GuidebookSpaceDTO {
    link?: string;
    texts?: TextOutputItemDTO[];
    weblinks?: WeblinkOutputItemDTO[];
    routes?: RouteOutputItemDTO[];
    transfers?: RouteOutputItemDTO[];
    pois?: PoiOutputItemDTO[];
    markers?: PoiOutputItemDTO[];
    categories?: Category[];
}
