import { GroupDtoAdmin } from "./GroupDto-Admin";
import { PageableAdmin } from "./Pageable-Admin";
import { SortAdmin } from "./Sort-Admin";

export interface PageOfGroupDtoAdmin{
    content?: GroupDtoAdmin[];
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