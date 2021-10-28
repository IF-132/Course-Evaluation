import { FeedbackRequest } from "./FeedbackRequest";
import { User } from "./User";

export interface Feedback{
    comment?: string;
    date?: string;
    feedbackRequest?: FeedbackRequest;
    id?: number
    student?: User;
    }