import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dateTime',
})
export class DateTimePipe implements PipeTransform {
    transform(date: string, hour: string): string {
        return date + "T" + hour + ":00+02:00";
    }
}
