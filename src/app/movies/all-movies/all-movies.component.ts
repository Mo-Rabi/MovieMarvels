import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/shared/interfaces/movies';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {

  movies: any[] = []
  watchlist:number[] = []

  constructor(private service: MoviesService, private router : Router, private cartService: SharedServiceService) {}
  searchKey: string = '';
  ngOnInit() {
    this.getMovies()
    this.cartService.search.subscribe((val) => {
      this.searchKey = val
    })
  }
  //? get all movies on the homepage
  getMovies() {
    this.service.getAllMovies().subscribe((res: any) => {
      this.movies = res.results
    })
  }
  //? navigate specific movie details
  goToMovie(id : number){
    this.router.navigate(['details',id])
  }

  //? Add/ remove movie to/ from watchlist then add it to Local storage
  addToWatchlist(movie:Movies){
    //*if movie id isn't found, add it to watchlist array
   if ( !this.watchlist.includes(movie.id,0)){
    this.watchlist.push(movie.id)
    console.log(this.watchlist);
    movie.watchlistStatus = !movie.watchlistStatus;

    //*if movie id is already inside watchlist array found, remove it
    }else{
      let movieToRemove = this.watchlist.indexOf(movie.id)
      this.watchlist.splice(movieToRemove,1)
      console.log(this.watchlist);
      movie.watchlistStatus = !movie.watchlistStatus;
    }
    localStorage.setItem("watchlist",JSON.stringify(this.watchlist))
  }
}





