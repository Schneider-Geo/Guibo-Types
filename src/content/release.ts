import { AccountBasicinfo } from "./account_basicinfo";

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
    photocontest: boolean;
    appEnabled: boolean;
    pdfEnabled: boolean;
    gpxEnabled: boolean;
    locked: boolean;

}
