import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Movie } from 'src/app/interfaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filterMovie = '';
  byTitle: boolean = false;
  byYear: boolean = false;
  moviesByYear: Movie[] = [];
  moviesByTitle: Movie[] = [];
  allMovies: boolean = true;

  constructor(public auth: AuthService, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
   
      
    });
  }

  orderByYear() {
    const moviesByYear = this.movies
      .filter((movie) => movie.releaseYear)
      .sort((year1, year2) => year1.releaseYear - year2.releaseYear);
    this.moviesByYear = moviesByYear;
    this.byYear = true;
    this.allMovies = false;
  }

  orderByTitle() {
    const moviesByTitle = this.movies
      .filter((movie) => movie.title)
      .sort((title1, title2) => title1.title.localeCompare(title2.title));
    this.moviesByTitle = moviesByTitle;
    this.byTitle = true;
    this.allMovies = false;
  }

  showAll() {
    this.allMovies = !this.allMovies;
    this.byTitle = false;
    this.byYear = false;
  }
}
