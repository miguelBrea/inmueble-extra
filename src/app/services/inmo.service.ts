import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class InmoService {

  properties: Property[];

  constructor(private http: HttpClient) {
    this.http.get('.../../assets/files/properties.json') //direccion de nuestro json
             .subscribe(
                (response: any[]) => {
                  this.properties = response;
                },
                error => {
                  console.log('Error: ', error.message);
                });
  }
}
