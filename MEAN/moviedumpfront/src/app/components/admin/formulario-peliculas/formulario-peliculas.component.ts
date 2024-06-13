//cSpell:disable
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumoApiService } from '../../../services/consumo-api.service';
import Swal from 'sweetalert2'
@Component({
    selector: 'app-formulario-peliculas',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './formulario-peliculas.component.html',
    styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent {
    generos: any = [
        { _id: 15534, nombre: 'Acción' },
        { _id: 223423, nombre: 'Aventura' },
        { _id: 364634, nombre: 'Comedia' },
        { _id: 4234, nombre: 'Drama' },
        { _id: 5234, nombre: 'Fantasía' },
        { _id: 6234, nombre: 'Terror' },
        { _id: 722, nombre: 'Ciencia Ficción' },
        { _id: 833, nombre: 'Musical' }
    ]

    peliculaForm: FormGroup
    regexAlfanumerico = /^[a-zA-Z0-9]+$/

    constructor(private fb: FormBuilder, private _consumoApi: ConsumoApiService) {
        this.peliculaForm = this.fb.group({
            titulo: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(this.regexAlfanumerico)
            ]],
            genero: ['', Validators.required],
            hora: ['1', [Validators.required, Validators.min(1)]],
            minuto: ['00', [Validators.required, Validators.min(0), Validators.max(59)]],
            segundo: ['00', [Validators.required, Validators.min(0), Validators.max(59)]],
            director: ['', Validators.required],
            imagen: ['', Validators.required],
            clasificacion: ['', Validators.required]
        })
    }

    envioFormulario() {
        console.log(this.peliculaForm.value);

        if (this.peliculaForm.valid) {
            let info = {
                titulo: this.peliculaForm.get('titulo')?.value,
                genero: this.peliculaForm.get('genero')?.value,
                duracion: `${this.peliculaForm.get('hora')?.value}:${this.peliculaForm.get('minuto')?.value}:${this.peliculaForm.get('segundo')?.value}`,
                director: this.peliculaForm.get('director')?.value,
                imagen: this.peliculaForm.get('imagen')?.value,
                clasificacion: this.peliculaForm.get('clasificacion')?.value
            }
            this._consumoApi.postPelicula(info).subscribe(data => {
                Swal.fire({
                    title: "Pelicula agregada",
                    icon: "success"
                });
            })
        } else {
            Swal.fire({
                title: "Formulario inválido",
                text: "No ve que le estan saliendo errores? :v",
                icon: "error"
            });
        }
    }

}
