import { Component } from '@angular/core';

/**
 * Generated class for the MovieDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'movie-details',
  templateUrl: 'movie-details.html'
})
export class MovieDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello MovieDetailsComponent Component');
    this.text = 'Hello World';
  }

}
