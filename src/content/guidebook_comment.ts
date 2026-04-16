export interface GuidebookComment {

    id: number;
    bundle: string;
    type: string;
    user: string;
    text: string;
    time: Date;
    sender?: string;
    senderAccount?: string;
    receiver?: string;
    receiverAccount?: string;
    receivedTime?: Date;


} 
