import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataexteriorService {
  constructor(private http: HttpClient) {}

  getData() {

    //Informacion de credenciales para usar la API
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer PTw2euyktol-Yl_KTZZL' 
      })
    }

    //tambien conocido como API ENDPOINT
    return this.http
      .get('https://the-one-api.dev/v2/movie', httpOptions)
      .pipe(catchError(
        (error) => {
          console.log(error);
          throw new Error('Hay un error en la API!!! ');
        }));
  }
}
