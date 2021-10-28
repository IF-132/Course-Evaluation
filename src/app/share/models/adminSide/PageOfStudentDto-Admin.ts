import { PageableAdmin } from "./Pageable-Admin";
import { SortAdmin } from "./Sort-Admin";
import { StudentDtoAdmin } from "./StudentDto-Admin";

export interface PageOfStudentDtoAdmin{
    content?: StudentDtoAdmin[];
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