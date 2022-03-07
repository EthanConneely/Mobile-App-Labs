import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private http: HttpClient) { }

  GetBlobData():Observable<any>
  {
    return this.http.get("https://jsonblob.com/api/jsonblob/948523855690088448");
  }

  GetGithubData():Observable<any>
  {
    return this.http.get("https://api.github.com/users/IrishBruse/repos");
  }
  GetWeatherData():Observable<any>
  {
    return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303");
  }
}
