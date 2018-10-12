import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from '../pages/components';
import {CourseDetailsComponent} from '../courses/components/course-details/course-details.component';
import {CourseAddComponent} from '../courses/components/course-add/course-add.component';

const routes: Routes = [
  {
    path: 'courses',
    component: ContentComponent,
    children: [
      {
        path: 'add',
        component: CourseAddComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: CourseDetailsComponent,
      },
    ]
  },
  // {
  //   path: 'course/add',
  //   component: CourseAddComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'course/edit/:id',
  //   component: CourseDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
