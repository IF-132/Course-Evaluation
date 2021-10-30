export interface CourseDto{
    courseName?: string;
    description?: string;
    endDate?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    roles?: string[];        // [ ROLE_ADMIN or ROLE_PRE_VERIFICATION or ROLE_STUDENT or ROLE_TEACHER ]
    startDate?: string;
    teacherId?: number;
    }