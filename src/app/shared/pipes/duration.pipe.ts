import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = '';
    const hours: number = Math.floor(value / 3600);
    if (hours && hours > 0) {
      result += `${hours}h`;
    }
    const minutes: number = Math.floor(value % 3600 / 60);
    if (minutes && minutes > 0) {
      result += ` ${minutes}m`;
    }
    const seconds: number = Math.floor(value % 3600 % 60);
    if (seconds && seconds > 0) {
      result += ` ${seconds}s`;
    }
    return result;
  }
}

