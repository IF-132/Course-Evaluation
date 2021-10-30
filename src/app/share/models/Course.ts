import { Group } from "./Group";
import { User } from "./User";

export interface Course{
    courseName?: string;
    firstName: string;
    lastName: string;
    description?: string;
    endDate?: string;
    groups?: Group[];
    id?: number;
    startDate?: string;
    teacher?: User;
    }
