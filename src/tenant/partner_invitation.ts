
export interface PartnerInvitation {
    id: number;
    inviter: string;
    invitee: string;
    requester: string;
    approver: string;
    creationTime: Date;
    approvalTime: Date;
}