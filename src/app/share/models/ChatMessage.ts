import { ChatRoom } from "./ChatRoom";
import { User } from "./User";

export interface ChatMessage{
    chatRoom?: ChatRoom;
    content?: string;
    createdAt?: string;
    edited?: boolean;
    id?: number;
    sender?: User;
    status?: string[];     // [ DELIVERED or RECEIVED ]
    }
