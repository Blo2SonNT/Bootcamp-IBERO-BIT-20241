import { Component } from '@angular/core';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { ConsumoApiService } from '../../../services/consumo-api.service';

@Component({
    selector: 'app-gestion-peliculas',
    standalone: true,
    imports: [
        FormularioPeliculasComponent
    ],
    templateUrl: './gestion-peliculas.component.html',
    styleUrl: './gestion-peliculas.component.css'
})
export class GestionPeliculasComponent {

    dataPeliculas!: any[]

    constructor(private _consumoApi: ConsumoApiService) {}

    ngOnInit():void{
        this.obtenerPeliculas()
    }

    obtenerPeliculas() {
        this._consumoApi.getPeliculas().subscribe((data:any) => {
            console.log(data);
            this.dataPeliculas = data
        })
    }
}
