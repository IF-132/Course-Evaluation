import { Group } from "./Group"

export interface UserDto{
    email: string;
    firstName: string;
    group: Group;
    id: number;
    lastName: string;
    roles: string[];   // [ ROLE_ADMIN or ROLE_PRE_VERIFICATION or ROLE_STUDENT or ROLE_TEACHER ]
    }
