import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/shared/interfaces/movies';
import { SharedServiceService } from 'src/app/shared/service/shared-service.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movies: any[] = []
  watchlist:number[] = []
  languages = [
    { prefix: 'en', name: 'English' },
    { prefix: 'fr', name: 'French' },
    { prefix: 'es', name: 'Spanish' },
    { prefix: 'pt', name: 'Portuguese' },
    {prefix: 'is', name: 'Icelandic'},
    {prefix: 'it', name: 'Italian'},
    {prefix: 'ru', name: 'Russian'}
  ];
  countries = [
    { prefix: 'IT', name: 'Italy' },
    { prefix: 'US', name: 'United States of America' },
    { prefix: 'CN', name: 'China' },
    { prefix: 'DE', name: 'Germany' },
    {prefix: 'IS', name: 'Iceland'},
    {prefix: 'AE', name: 'United Arab Emirates'},
    {prefix: 'FR', name: 'France'},
    {prefix: 'CH', name: 'Switzerland'},
    {prefix: 'GB', name: 'United Kingdom'},
    {prefix: 'AU', name: 'Australia'},
    {prefix: 'FR', name: 'France'},
  ]

  getLanguageName(prefix: string): string {
    const language = this.languages.find(lang => lang.prefix === prefix);
    return language ? language.name : '';
  }
  getCountryName(prefix: string): string {
    const country = this.countries.find(coun => coun.prefix === prefix);
    return country ? country.name : '';
  }
  selectedMovie: Movies | undefined;
  idActive: number | undefined;

  constructor(
    private activeRouter: ActivatedRoute,
    private movieService: MoviesService,
    private service: MoviesService,
    private router : Router, 
    private cartService: SharedServiceService
  ) {}
  searchKey: string = '';
  ngOnInit() {
    console.log(this.activeRouter.snapshot.params['id']);
    this.idActive = +this.activeRouter.snapshot.params['id'];
    this.movieService.getMovie(this.idActive).subscribe(
      (movie) => {
        this.selectedMovie = movie;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );
    this.getMovies()
    this.getWatchlist()
    this.cartService.search.subscribe(val => {
      this.searchKey = val
    })
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
