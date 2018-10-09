import {Pipe, PipeTransform} from '@angular/core';
import {ICourseModel} from '../../courses/components/interface/courses.model';
import {CoursesService} from '../../courses/components/services/courses.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private courseService: CoursesService) {

  }

  transform(arr: ICourseModel[], searchText: string): any {
    if (!arr) {
      return [];
    }
    // let temp = this.courseService.getAllCourses();
    if (!searchText) {
      return arr;
    }
    searchText = searchText.toLowerCase();
    return arr.filter(({title}) => {
      return title.toLowerCase().includes(searchText);
    });
  }

}
