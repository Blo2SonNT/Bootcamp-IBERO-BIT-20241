//cSpell:disable
import { Component } from '@angular/core';
import { FormularioGenerosComponent } from '../formulario-generos/formulario-generos.component';
import { ConsumoApiService } from '../../../services/consumo-api.service';
import Swal from 'sweetalert2'
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
    idGenero: string = "";
    tituloModal: string = "Agregar Genero";

    constructor(private _consumoApi: ConsumoApiService) { }

    ngOnInit(): void {
        this.obtenerGeneros();
    }


    obtenerGeneros() {
        this._consumoApi.getGeneros().subscribe((data: any) => {
            this.infoGeneros = data
        });
    }

    eliminarGenero(id: string) {
        Swal.fire({
            title: "Esta seguro de eliminar el genero",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                this._consumoApi.deleteGeneros(id).subscribe((data: any) => {
                    this.obtenerGeneros();
                });
                Swal.fire({
                    title: "Genero eliminado correctamente!",
                });
            }
        });
    }

    alimentarFormulario(id: string, tituloModalAccion: string) {
        this.idGenero = id;
        this.tituloModal = tituloModalAccion;
        console.log('id desde padre', this.idGenero)
    }

    cambiarTituloModal(titulo: string) {
        this.tituloModal = titulo;
    }

}
