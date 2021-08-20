import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movies!: Movie;
  urlImages: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
