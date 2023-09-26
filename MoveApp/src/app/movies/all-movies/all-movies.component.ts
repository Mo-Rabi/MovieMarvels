import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  movies: any[] = []
  constructor(private service: MoviesService) {}
  ngOnInit() {
    this.getMovies()
  }
  getMovies() {
    this.service.getAllMovies().subscribe((res: any) => {
      this.movies = res.results
      console.log(res)
    })
  }
}
