import {Pipe, PipeTransform} from '@angular/core';
import {ICourseModel} from '../../courses/interface/courses.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor() {

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
