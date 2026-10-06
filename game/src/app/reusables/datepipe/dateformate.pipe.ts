import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDateFormat',
  standalone: true
})
export class RemoveDateFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value
      .replace('T', ' ')          // replace T with space
      .replace('[UTC]', '')       // remove [UTC]
      .replace(/Z$/, '')          // remove trailing Z
      .replace(/\.\d+/, '')       // remove milliseconds like .575
      .trim();

  }
}
