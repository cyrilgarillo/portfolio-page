import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'probabilityMultiplier'
})
export class ProbabilityMultiplierPipe implements PipeTransform {

  transform(value: number): number {
    return parseFloat((value * 100).toFixed(2));
  }

}
