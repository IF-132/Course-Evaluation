import { Course } from "./Course";
import { Feedback } from "./Feedback";
import { Group } from "./Group";

export interface User{
    accountVerified?: boolean;
    active2FA?: boolean;
    courses?: Course[];
    email?: string;
    feedbacks?: Feedback[];
    firstName?: string;
    group?: Group;
    id?: number;
    lastName?: string;
    password?: string;
    profilePicturePath?: string;
    roles?: string[];  // [ ROLE_ADMIN or ROLE_PRE_VERIFICATION or ROLE_STUDENT or ROLE_TEACHER ]
    secret?: string;
    }