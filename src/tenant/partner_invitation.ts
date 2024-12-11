
export interface PartnerInvitation {
    id: number;
    inviter: string;
    invitee: string;
    requester: string;
    approver: string;
    message: string;
    creationTime: Date;
    approvalTime: Date;
}