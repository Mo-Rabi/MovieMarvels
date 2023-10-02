import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movies } from 'src/app/shared/interfaces/movies';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  randomMovies: Movies[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getRandomMovies(4)
      .subscribe((movies: Movies[]) => {
        this.randomMovies = movies;
      });
  }
}
