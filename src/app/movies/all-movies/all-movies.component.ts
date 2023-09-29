import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { Movies } from 'src/app/shared/interfaces/movies';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  
  movies: any[] = []
  watchlist:number[] = []

  constructor(private service: MoviesService, private router : Router) {}
  async ngOnInit() {
    this.getMovies()
    this.getWatchlist()
  }




  //? get all movies on the homepage + watchlist status tracking
  getMovies() {
    this.service.getAllMovies().subscribe((res: any) => {
      this.movies = res.results;
      for (let movie of this.movies) {
        movie.watchlistStatus = this.watchlist.includes(movie.id);
      }
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


 //?get watchlist items on homepage component initialization
  getWatchlist(){
     this.watchlist= JSON.parse(localStorage.getItem('watchlist')??'[]')
     console.log(this.watchlist);
     console.log(this.movies);
  }

}