import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { WatchlistComponent } from './movies/watchlist/watchlist.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path: "",
    component: AllMoviesComponent,
    canActivate: [authGuard],
  },
  {
    path: "details/:id",
    component: MoviesDetailsComponent
  },
  {
    path: "watchlist",
    component: WatchlistComponent
  },
  {
    path: "**",
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
