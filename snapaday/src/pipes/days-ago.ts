import { Pipe, PipeTransform,Injectable } from '@angular/core';

/**
 * Generated class for the DaysAgo pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'daysAgo',
})
@Injectable()
export class DaysAgo implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, ...args) {
    let now = new Date();
    let oneDay = 24 * 60 * 60 * 100;
    let diffDays = Math.round(Math.abs( (value.getTime()-now.getTime())/oneDay ))
    return diffDays;
  }
}
