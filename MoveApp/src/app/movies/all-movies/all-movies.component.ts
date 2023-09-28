import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  
  movies: any[] = []
  constructor(private service: MoviesService, private router : Router) {}
  ngOnInit() {
    this.getMovies()
  }
  getMovies() {
    this.service.getAllMovies().subscribe((res: any) => {
      this.movies = res.results
    })
  }
  goToMovie(id : number){
    this.router.navigate(['details',id])
  }
}