import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/shared/interfaces/movies';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  selectedMovie: Movies | undefined;
  idActive: number | undefined;

  constructor(
    private activeRouter: ActivatedRoute,
    private movieService: MoviesService,
  ) {}

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
  }
}
