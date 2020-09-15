import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    const year = value[0] + value[1] + value[2] + value[3];
    const month = value[5] + value[6];
    const day = value[8] + value[9];
    return day + '/' + month + '/' + year;
  }
}
