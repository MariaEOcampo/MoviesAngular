import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const moviesList = [];
    for (const movie of value) {
      if (movie.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        moviesList.push(movie);
      }
      if (movie.programType.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        moviesList.push(movie);
      }
      if (movie.releaseYear.toString().indexOf(arg) > -1) {
        moviesList.push(movie);
      }
    }

    return moviesList;
  }
}
