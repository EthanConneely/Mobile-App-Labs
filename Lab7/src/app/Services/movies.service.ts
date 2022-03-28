import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  GetMovies() :Observable<any>{
return this.http.get("http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27");
  }
}
