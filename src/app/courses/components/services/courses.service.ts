import {Injectable} from '@angular/core';
import {coursesList} from '../../course.mock-data';
import {Observable, of, throwError} from 'rxjs';
import {ICourseModel} from '../../interface/courses.model';
import {catchError, filter, flatMap, map, switchMap} from 'rxjs/operators';

const courseVideoListObservable: Observable<Array<ICourseModel>> = of(coursesList);

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() {
  }

  getAllCourses(): Observable<ICourseModel[]> {
    return courseVideoListObservable;
  }

  getCourseById(id: number): Observable<ICourseModel> {
    return this.getAllCourses()
      .pipe(
        map((items: ICourseModel[]) => items.find(item => item.id === id)),
        catchError(this.handleError)
      );
  }

  updateCourse(course: ICourseModel): void {
    const i = coursesList.findIndex(c => c.id === course.id);
    if (i > -1) {
      coursesList.splice(i, 1, course);
    }
  }

  createCourse() {
  }

  deleteCourse({id}): Observable<ICourseModel[]> {
    console.log('course id', id);
    return courseVideoListObservable.pipe(
      map(data => {
        const i = data.findIndex(item => item.id === id);
        data.splice(i, 1);
        return data;
      })
    );
    // courseVideoListObservable.pipe(
    //   switchMap(item => item.id !== id)
    // );
  }

  private handleError(err: any) {
    console.log('An error occurred', err);
    return throwError('Error in.... ');
  }
}
