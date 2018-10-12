import {Component, Inject, OnInit} from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ICourseModel} from '../../interface/courses.model';
import {SearchService} from '../../../core/services/search.service';
import {Observable, Subject} from 'rxjs';
import {FilterPipe} from '../../../shared/pipes/filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  providers: [FilterPipe]
})
export class CourseListComponent implements OnInit {

  public courses: ICourseModel[];
  private searchTerms$ = new Subject<string>();
  public videoId: string;
  // public filterPipe;
  constructor(
    private courseService: CoursesService,
    private searchService: SearchService,
    private filterPipe: FilterPipe
  ) {
    // let filterPipe = new FilterPipe();
  }

  ngOnInit() {
    this.getAllCourses();
    this.searchService.search(this.searchTerms$)
      .subscribe(result => {
        console.log('result', result);
      });
  }

  getAllCourses() {
    this.courseService.getAllCourses()
      .subscribe(data => this.courses = data);
  }

  playVideo(course) {
    this.videoId = course.videoId;
  }

  deleteCourse(course) {
    this.courseService.deleteCourse(course)
      .subscribe(data => {
        console.log('In deleteCourse data', data);
        return this.courses = data;
      });
    console.log('this.courses', this.courses);
  }

  changeListCourseByPipe(filteredCourses) {
    console.log('filteredCourses', filteredCourses);
    this.getAllCourses();
    this.courses = this.filterPipe.transform(this.courses, filteredCourses);
    // console.log('temp', temp);
    // this.courses = filteredCourses;
  }
}
