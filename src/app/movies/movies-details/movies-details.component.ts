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
    return language ? language.name : 'Unknown';
  }
  getCountryName(prefix: string): string {
    const country = this.countries.find(coun => coun.prefix === prefix);
    return country ? country.name : 'Unknown';
  }
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
