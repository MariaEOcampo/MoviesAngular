import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MovieListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'moviesangular.us.auth0.com',
      clientId: 'HGtk0cW4fTWkrBOTFAx0vt7ZalmoMgYX',
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
