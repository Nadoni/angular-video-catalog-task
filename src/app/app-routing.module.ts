import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent, LoginComponent, NotFoundPageComponent} from './pages/components';
import {CoursesComponent} from './courses/courses.component';
import {AuthGuard} from './core/guards/auth.guard';
import {PagesModule} from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'courses',
  //   component: CoursesComponent,
  // },
  {
    path: 'courses',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
