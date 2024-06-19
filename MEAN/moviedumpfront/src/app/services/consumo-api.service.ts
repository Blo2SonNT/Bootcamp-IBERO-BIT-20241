import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';
import { Genero } from '../models/generos.model';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class ConsumoApiService {

    urlAPI = environment.baseApiUrl

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

    putPelicula(id: string, dataPelicula: Pelicula) {
        return this.http.put(`${this.urlAPI}/actualizar-pelicula/${id}`, dataPelicula)
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

    putGenero(id: string, dataGenero: Genero) {
        return this.http.put(`${this.urlAPI}/actualizar-genero/${id}`, dataGenero)
    }
}
