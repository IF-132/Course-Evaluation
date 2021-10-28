export interface UserDtoAdmin{
    firstName?: string;
    id?: number;
    lastName?: string;
    roles?: string[];     //  [ ROLE_ADMIN or ROLE_STUDENT or ROLE_TEACHER ]
    }