import { FeedbackRequestDto } from "./FeedbackRequestDto"
import { Pageable } from "./Pageable"
import { Sort } from "./Sort"

export interface PageOfFeedbackRequestDto{
    content?: FeedbackRequestDto[];
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
