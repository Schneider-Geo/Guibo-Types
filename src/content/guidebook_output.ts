import { GuidebookStageDTO } from './guidebook_stage';
import { TextOutputItemDTO } from './text_output_item';

/** Localized guidebook as returned by `GET guidebook/{id}?lang=` (`GuidebookOutputDTO`). */
export interface GuidebookOutputDTO {
    link?: string;
    title?: string;
    image?: string;
    description?: string;
    regions?: string[];
    activityType?: string;
    stages?: GuidebookStageDTO[];
    generalInfo?: TextOutputItemDTO[];
}
