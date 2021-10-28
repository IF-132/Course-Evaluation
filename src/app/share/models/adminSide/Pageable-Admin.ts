import { SortAdmin } from "./Sort-Admin";

export interface PageableAdmin{
    offset?: number;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    sort?: SortAdmin;
    unpaged?: boolean;
    }