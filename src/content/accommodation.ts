import { AccommodationStageinfo } from "./accommodation_stageinfo";

export interface Accommodation {
    link: string;
    name: string;
    names?: Record<string, string>;
    arrivalDate?: Date;
    departureDate?: Date;
    lat: number;
    lng: number;
    images: string[];
    comment?: string;
    stages: AccommodationStageinfo[];
}