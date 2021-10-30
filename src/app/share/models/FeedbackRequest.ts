import { Course } from "./Course"
import { Feedback } from "./Feedback"
import { Question } from "./Question"

export interface FeedbackRequest{
    course: Course;
    endDate: string;
    feedbackDescription: string;
    feedbacks: Feedback[];
    id: number;
    lastNotification: string;
    questions: Question[];
    startDate: string;
    status: string[];    //[ ACTIVE or ARCHIVE or DELETED or DRAFT or SENT ]
    }
