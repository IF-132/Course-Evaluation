export interface TeacherToCourseDto{
    firstName?: string;
    id?: number;
    lastName?: string;
    roles?: string[];    //  [ ROLE_ADMIN or ROLE_PRE_VERIFICATION or ROLE_STUDENT or ROLE_TEACHER ]
    }