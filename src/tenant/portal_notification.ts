export interface PortalNotification {
    id: number;
    message: string;
    context: string;
    subcontext: string;
    recipient: string;
    recordingTime: Date;
}