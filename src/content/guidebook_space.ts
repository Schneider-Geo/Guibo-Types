import { GuidebookStageDTO } from './guidebook_stage';
import { PoiOutputItemDTO } from './poi_output_item';
import { TextOutputItemDTO } from './text_output_item';
import { WeblinkOutputItemDTO } from './weblink_output_item';

/** Content of one guidebook space as returned by `GET guidebook/{id}/space/{space}` (`GuidebookSpaceDTO`). */
export interface GuidebookSpaceDTO {
    link?: string;
    name?: string;
    names?: { [lang: string]: string };
    texts?: TextOutputItemDTO[];
    weblinks?: WeblinkOutputItemDTO[];
    pois?: PoiOutputItemDTO[];
    /** Stages of the space (without content), sorted. */
    stages?: GuidebookStageDTO[];
}
