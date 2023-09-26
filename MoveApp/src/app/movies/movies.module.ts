import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';




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
