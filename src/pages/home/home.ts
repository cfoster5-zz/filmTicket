import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieDBProvider } from "../../providers/moviedb/moviedb";
import { MovieDetailsComponent } from "../../components/movie-details/movie-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public moviedb: MovieDBProvider) {

  }

  ionViewDidLoad() {
    this.moviedb.getNowPlaying()
  }

  arr(size: number) {
    return Array.from(Array(size), i => i)
  }

}
