import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieListComponent,
    MovieCardComponent,
    FilterPipe,
    OrderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
