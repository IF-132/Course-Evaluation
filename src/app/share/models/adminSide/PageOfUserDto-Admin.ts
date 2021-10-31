import { PageableAdmin } from "./Pageable-Admin";
import { SortAdmin } from "./Sort-Admin";
import { UserDtoAdmin } from "./UserDto-Admin";

export interface PageOfUserDtoAdmin{
    content?: UserDtoAdmin[];
    empty?: boolean;
    first?: boolean;
    last?: boolean;
    number?: number;
    numberOfElements?: number;
    pageable?: PageableAdmin;
    size?: number;
    sort?: SortAdmin;
    totalElements?: number;
    totalPages?: number;
    }
