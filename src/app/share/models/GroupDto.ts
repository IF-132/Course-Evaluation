import { CourseDto } from "./CourseDto"
import { UserDto } from "./UserDto";

export interface GroupDto{
    courses?: CourseDto[];
    groupName?: string;
    id?: number;
    students?: UserDto[];
    }