import { UserDtoAdmin } from "./UserDto-Admin";

export interface CourseDtoAdmin{
    courseName?: string;
    description?: string;
    endDate?: string;
    id?: number;
    startDate?: string;
    teacherDto?: UserDtoAdmin;
    }