import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {CoursesComponent} from './courses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import { CourseAddComponent } from './components/course-add/course-add.component';
import {CourseDetailsComponent} from './components/course-details/course-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    // temp way
  ],
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseItemComponent,
    CourseAddComponent,
    CourseDetailsComponent
  ],
  exports: [CoursesComponent, CourseAddComponent]
})
export class CoursesModule { }
