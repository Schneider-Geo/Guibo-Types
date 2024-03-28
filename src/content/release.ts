import { AccountBasicinfo } from "./account_basicinfo";

export interface Release {
    id: number;
    link: string;
    downloadCode: number;
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
    enabled: boolean;
    operator: AccountBasicinfo;
    seller: AccountBasicinfo;

}
