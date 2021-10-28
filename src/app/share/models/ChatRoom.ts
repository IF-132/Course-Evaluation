import { ChatMessage } from "./ChatMessage";

export interface ChatRoom{
    chatType?: string[];     // [ GROUP or TEACHER ]
    id?: number;
    messages?: ChatMessage[];
    }