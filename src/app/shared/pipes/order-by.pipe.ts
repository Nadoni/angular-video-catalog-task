import {Pipe, PipeTransform} from '@angular/core';
import {ICourseModel} from '../../courses/components/interface/courses.model';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(value: ICourseModel[], field?: string): any {
    let checkDate;
    if (value.length < 1 || field === undefined) {
      return;
    }
    if (Array.isArray(value)) {
      if (field.startsWith('-')) {
        field = field.substring(1);
        checkDate = new Date(value[0][field]);
        if (checkDate instanceof Date && !isNaN(checkDate.valueOf())) {
          return [...value].sort((a, b) => Number(new Date(b[field])) - Number(new Date(a[field])));
        } else if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
          return [...value].sort((a, b) => b[field].localeCompare(a[field]));
        }
        return [...value].sort((a, b) => b[field] - a[field]);
      } else {
        checkDate = new Date(value[0][field]);
        if (checkDate instanceof Date && !isNaN(checkDate.valueOf())) {
          return [...value].sort((a, b) => {
            return Number(new Date(a[field])) - Number(new Date(b[field]));
          });
        } else if (typeof value[0][field] === 'string' || value[0][field] instanceof String) {
          return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
        }
        return [...value].sort((a, b) => a[field] - b[field]);
      }
    }
    return value;
  }

}
