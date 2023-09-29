<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../sharedPipe/filter.pipe';




@NgModule({
  declarations: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent, 
    FilterPipe
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent
  ]
})
export class MoviesModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent
  ]
})
export class MoviesModule { }
>>>>>>> origin/main
