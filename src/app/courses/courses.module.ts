import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {CoursesComponent} from './courses.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [CoursesComponent, CourseListComponent, CourseItemComponent],
  exports: [CoursesComponent]
})
export class CoursesModule { }
