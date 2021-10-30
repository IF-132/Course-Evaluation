import { AnswerDto } from "./AnswerDto"

export interface FeedbackDto{
    answers?: AnswerDto[];
    comment?: string;
    date?: string;
    feedbackRequestId?: number;
    id?: number;
    studentId?: number;
    }