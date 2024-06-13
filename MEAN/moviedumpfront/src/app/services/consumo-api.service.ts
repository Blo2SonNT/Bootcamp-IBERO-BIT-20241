import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { Genero } from '../models/generos.model';


@Injectable({
    providedIn: 'root'
})
export class ConsumoApiService {

    urlAPI = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    /**
     * * esta seccion corresponde a peliculas
     */
    postPelicula(dataPelicula: Pelicula){
        return this.http.post(`${this.urlAPI}/crear-pelicula`, dataPelicula)
    }


    getPeliculas(){
        return this.http.get(`${this.urlAPI}/listar-peliculas`)
    }


    /**
     * * esta seccion corresponde a generos
     */
    postGeneros(dataGenero: Genero){
        return this.http.post(`${this.urlAPI}/crear-genero`, dataGenero)
    }


    getGeneros(){
        return this.http.get(`${this.urlAPI}/listar-generos`)
    }
}
