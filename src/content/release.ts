import { AccountBasicinfo } from "./account_basicinfo";

// Type of the guidebook a release is based on (ReleaseOutputDTO.GuidebookType)
// MASTER: guidebook template, CUSTOMIZED: customized copy of a template, ONDEMAND: guidebook created on demand
export type ReleaseGuidebookType = 'MASTER' | 'CUSTOMIZED' | 'ONDEMAND';

export interface Release {
    id: number;
    link: string;
    operatorDownloadCode: number;
    sellerDownloadCode: number;
    startdate: Date;
    enddate: Date;
    arrivaldate?: Date;
    departuredate?: Date;
    devices: number;
    guidebookInternalId: string;
    lang: string;
    bundleName: string;
    creation: Date;
    customized: boolean;
    disabled: boolean;
    provider: AccountBasicinfo;
    seller: AccountBasicinfo;
    url: string;
    positioning: boolean;
    navigation: boolean;
    tourguide: boolean;
    travelgroup: boolean;
    photocontest: boolean;
    digitalPostcard: boolean;
    appEnabled: boolean;
    pdfEnabled: boolean;
    gpxEnabled: boolean;
    stageHotelTimeline: boolean;
    locked: boolean;
    incidents: string[];
    guidebookType?: ReleaseGuidebookType | null; // null if unknown

}
