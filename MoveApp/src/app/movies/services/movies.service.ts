import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=3b19eb14d90057338aeb6e74f25ddb7e")
  }
}
