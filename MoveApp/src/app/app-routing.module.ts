import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/components/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies/components/movies-details/movies-details.component';

const routes: Routes = [
  {
    path: "movies",
    component: AllMoviesComponent
  },
  {
    path: "details",
    component: MoviesDetailsComponent
  },
  {
    path: "**",
    redirectTo: "movies",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
