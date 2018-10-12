import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent, LoginComponent, MyErrorStateMatcher, NotFoundPageComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {CoursesModule} from '../courses/courses.module';
import {PagesRoutingModule} from '../pages/pages-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoursesModule,
    PagesRoutingModule
  ],
  declarations: [LoginComponent, ContentComponent, NotFoundPageComponent],
  exports: [LoginComponent, ContentComponent, NotFoundPageComponent]
})
export class PagesModule { }
