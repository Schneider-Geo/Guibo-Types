import { AccommodationStageinfo } from "./accommodation_stageinfo";

export interface Accommodation {
    link: string;
    name: string;
    names?: Record<string, string>;
    arrival?: Date;
    departure?: Date;
    lat: number;
    lng: number;
    images: string[];
    comment?: string;
    stages: AccommodationStageinfo[];
}