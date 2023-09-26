import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';




@NgModule({
  declarations: [
    AllMoviesComponent,
    MoviesDetailsComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    AllMoviesComponent
  ]
})
export class MoviesModule { }
