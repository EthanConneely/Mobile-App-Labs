import { Component } from '@angular/core';
import { BlobService } from './Services/blob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiLab';

  blobData: any;
  githubData: any;
  weatherData: any;

  constructor(public blob: BlobService) { }

  ngOnInit() {
    this.blob.GetBlobData().subscribe(
      (data) => {
        this.blobData = data;
        console.log(data);
      }
    );

    this.blob.GetGithubData().subscribe(
      (data) => {
        this.githubData = data;
        console.log(data);
      }
    );


    this.blob.GetWeatherData().subscribe(
      (data) => {
        this.weatherData = data;
        console.log(data);
      }
    );

  }

}
