<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { WatchlistComponent } from './movies/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: "",
    component: AllMoviesComponent
  },
  {
    path: "details/:id",
    component: MoviesDetailsComponent
  },
  {
    path: "watchlist",
    component: WatchlistComponent
  },
  // {
  //   path: "**",
  //   redirectTo: "movies",
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { WatchlistComponent } from './movies/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: "",
    component: AllMoviesComponent
  },
  {
    path: "details/:id",
    component: MoviesDetailsComponent
  },
  {
    path: "watchlist",
    component: WatchlistComponent
  },
  // {
  //   path: "**",
  //   redirectTo: "movies",
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> origin/main
