import { Component } from '@angular/core';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import { ConsumoApiService } from '../../../services/consumo-api.service';

@Component({
    selector: 'app-gestion-generos',
    standalone: true,
    imports: [
        FormularioGenerosComponent
    ],
    templateUrl: './gestion-generos.component.html',
    styleUrl: './gestion-generos.component.css'
})
export class GestionGenerosComponent {

    infoGeneros: any[] = [];

    constructor( private _consumoApi: ConsumoApiService ){}

    ngOnInit():void{
        this.obtenerGeneros();
    }

    obtenerGeneros(){
        this._consumoApi.getGeneros().subscribe((data:any) => {
            this.infoGeneros = data
        });
    }

}
