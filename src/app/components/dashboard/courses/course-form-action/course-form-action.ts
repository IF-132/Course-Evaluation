import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck,
} from '@angular/core';
import { ITeacher } from 'src/app/components/teachers/teachers.service';

import { ICourse } from '../courses.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './course-form-action.component.html',
  styleUrls: ['./course-form-action.scss'],
})
export class CourseFormActionComponent implements OnInit, DoCheck {
  public minDate: Date;
  @Input() public course: ICourse;
  @Input() public teachers: ITeacher[];
  @Input() public closeFormWindow: void;
  @Input() public title: string;

  @Output() private isFormOpen: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Output() private courseForm: EventEmitter<ICourse> =
    new EventEmitter<ICourse>();

  public closeForm(): void {
    this.isFormOpen.emit(false);
  }

  public onSubmit(): void {
    this.courseForm.emit(this.course);
  }

  public ngDoCheck(): void {
    this.minDate = new Date(this.course.startDate);
  }

  public ngOnInit(): void {
    this.minDate = new Date(this.course.startDate);
  }
}
