import { Pageable } from "./Pageable"
import { Sort } from "./Sort"
import { UserDto } from "./UserDto"

export interface PageOfUserDto{
    content?: UserDto[];
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: Pageable;
    size?: number;
    sort?: Sort;
    totalElements?: number;
    totalPages?: number;
    }
