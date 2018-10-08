import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey } from './api'

/*
  Generated class for the MoviedbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieDBProvider {

  movies: any[];

  constructor(public http: HttpClient) {
    console.log('Hello MoviedbProvider Provider');
  }

  getNowPlaying() {
    this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`).subscribe(data => {
      // console.log(data['results'])
      data['results'].forEach(movie => {
          movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
          // movie.poster_path = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
          movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          this.http.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&append_to_response=credits`).subscribe(data => {
              console.log(data)
              movie.runtime = data['runtime']
              movie.genres = data['genres']
              movie.credits = data['credits']

              let voteAverageMod = movie.vote_average / 2

              movie.starStructure = {full: Math.floor(voteAverageMod)}

              if (voteAverageMod - movie.starStructure.full > 0) {
                  movie.starStructure.halfStar = true;
              }
          })
      });
      this.movies = data['results'];
      console.log(this.movies, this.movies[0].poster_path)
    })
  }

}
