import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bike } from '../models/bike';
import {HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  

  
  bikesURL = 'https://bikes-9a456.firebaseio.com';
  urlEnd = 'data.json';
 


  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>(`${this.bikesURL}/${this.urlEnd}`)
    .map( data => {
      const bikes = data;
      for (const bike of bikes) {
        console.log( 'bike from server is:: ', bike);
      }
      return bikes;
    }

    );
  }

  storeBikes(bikes: Bike[]) {
    // return this.http.put(`${this.bikesURL}/${this.urlEnd}`, bikes, httpOptions);
    return this.http.post(`${this.bikesURL}/${this.urlEnd}`, bikes, httpOptions);
  }

  toggleBike(bike: Bike): Observable<any> {
      return this.http.put(`${this.bikesURL}/data/-LeXJcDG-sJ5vOwa15gr/${bike.id - 1}.json`, bike, httpOptions);
      // return this.http.put(`${this.bikesURL}/data/${bike.id}.json`, bike, httpOptions);
  }

} 
