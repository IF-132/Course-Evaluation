import { ChatRoom } from "./ChatRoom"
import { Course } from "./Course"
import { User } from "./User"

export interface Group{
    chatRoom?: ChatRoom;
    courses?: Course[];
    groupName?: string;
    id?: number;
    users?: User[];
    }