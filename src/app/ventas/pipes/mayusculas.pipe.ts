import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(argumento: string, enMayusculas: boolean = true): string{

    return enMayusculas ? argumento.toUpperCase() : argumento.toLowerCase()
  }
}