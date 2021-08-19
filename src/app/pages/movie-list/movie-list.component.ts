import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
})
export class MovieListComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
