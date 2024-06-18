import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { Genero } from '../models/generos.model';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ConsumoApiService {

    urlAPI = 'http://localhost:3000/api/v1'

    constructor(private http: HttpClient) { }

    /**
     * * esta seccion corresponde a peliculas
     */
    postPelicula(dataPelicula: Pelicula) {
        return this.http.post(`${this.urlAPI}/crear-pelicula`, dataPelicula)
    }


    getPeliculas() {
        return this.http.get(`${this.urlAPI}/listar-peliculas`)
    }

    getPelicula(id: string): Observable<any> {
        return this.http.get(`${this.urlAPI}/buscar-pelicula/${id}`)
    }

    deletePelicula(id: string) {
        return this.http.delete(`${this.urlAPI}/borrar-pelicula/${id}`)
    }


    /**
     * * esta seccion corresponde a generos
     */
    postGeneros(dataGenero: Genero) {
        return this.http.post(`${this.urlAPI}/crear-genero`, dataGenero)
    }

    getGeneros() {
        return this.http.get(`${this.urlAPI}/listar-generos`)
    }

    getGenero(id: string) {
        return this.http.get(`${this.urlAPI}/buscar-genero/${id}`)
    }

    deleteGeneros(id: string) {
        return this.http.delete(`${this.urlAPI}/borrar-genero/${id}`)
    }
}
