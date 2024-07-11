export interface  OperationTrace {
    account: string;
    bundle : string;
    operation : string;
    assetType? : string;
    assetId? : string;
    comment? : string;
    service? : string;
    time: Date;

}