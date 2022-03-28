import { Component } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public movies: any[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    console.log('test');

    this.moviesService.GetMovies().subscribe((data) => {
      this.movies = data.Search;
    });
  }
}
