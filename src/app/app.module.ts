import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { StreamingComponent } from './movies/movie-list/streaming/streaming.component';
import { TrailersComponent } from './movies/movie-list/trailers/trailers.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './auth/auth.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    StreamingComponent,
    TrailersComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
