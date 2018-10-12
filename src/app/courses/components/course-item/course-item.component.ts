import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourseModel} from '../../interface/courses.model';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ConfirmationDialogComponent} from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: ICourseModel;
  @Output() playCourse: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteCourse: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  playVideo() {
    this.playCourse.emit(this.course);
  }

  deleteItem(course) {
    console.log('course, ', course);
    const dialogConfig = new MatDialogConfig();
    const {title, author} = course;

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {title, author};

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(val => {
      if (val) {
        this.deleteCourse.emit(course);
      }
    });


  }


}
