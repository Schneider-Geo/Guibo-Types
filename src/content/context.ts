import { Category } from './category';

export interface Context {
    reference: boolean;
    referenceAutomated: boolean;
    referenceId?: string;
    bundle?: string;
    sorting?: number;
    group?: string;
    groupSorting?: number;
    category?: Category;
    visibility?: {
        app?: number;
        pdf?: number;
        tourmaps?: number;
        gpx?: number;
    };
    guideOnly: boolean;

}