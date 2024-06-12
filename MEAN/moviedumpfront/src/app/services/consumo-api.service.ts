import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';


@Injectable({
    providedIn: 'root'
})
export class ConsumoApiService {

    urlAPI = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    postPelicula(dataPelicula: Pelicula){
        return this.http.post(`${this.urlAPI}/crear-pelicula`, dataPelicula)
    }
}
