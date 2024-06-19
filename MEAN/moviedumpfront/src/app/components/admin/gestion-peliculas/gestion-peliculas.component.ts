import { Component } from '@angular/core';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { ConsumoApiService } from '../../../services/consumo-api.service';
import Swal from 'sweetalert2'
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
    idPelicula: string = ""
    tituloModal: string = "Crear Pelicula"

    constructor(private _consumoApi: ConsumoApiService) { }

    ngOnInit(): void {
        this.obtenerPeliculas()
    }

    obtenerPeliculas() {
        this._consumoApi.getPeliculas().subscribe((data: any) => {
            console.log(data);
            this.dataPeliculas = data
        })
    }

    eliminarPelicula(id: string) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                this._consumoApi.deletePelicula(id).subscribe((dataGatito: any) => {
                    this.obtenerPeliculas()
                })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    alimentarFormulario(id: string, titulo: string) {
        this.idPelicula = id
        this.tituloModal = titulo
    }

    ActualizarTitulo(titulo: string) {
        this.tituloModal = titulo
    }

}
