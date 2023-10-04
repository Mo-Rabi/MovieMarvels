import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from '../sharedPipe/filter.pipe';
import { RandomComponent } from './random/random.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';



@NgModule({
  declarations: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent,
    FilterPipe,
    RandomComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,


  ],
  exports: [
    AllMoviesComponent,
    MoviesDetailsComponent,
    WatchlistComponent,
    MatButtonModule,
    MatBadgeModule

  ]
})
export class MoviesModule { }
