import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { WatchlistComponent } from './movies/watchlist/watchlist.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    component: AllMoviesComponent,
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
    path: "sign-in",
    component: SignInComponent,
    canActivate: [authGuard],

  },
  {
    path: "sign-up",
    component: SignUpComponent
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
