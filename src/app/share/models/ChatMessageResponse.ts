export interface ChatMessageResponse{
    content?: string;
    createdAt?: string;
    edited?: boolean;
    id?: number;
    senderFirstName?: string;
    senderId?: number;
    senderLastName?: string;
    senderProfilePicture?: string;
}