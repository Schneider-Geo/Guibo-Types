import { LogContextDetail } from "./log_context_detail";


export interface  ApplicationIncident {
    account: string;
    application : string;
    environment : string;
    process? : string;
    message? : string;
    level? : string;
    detail? : LogContextDetail;

}