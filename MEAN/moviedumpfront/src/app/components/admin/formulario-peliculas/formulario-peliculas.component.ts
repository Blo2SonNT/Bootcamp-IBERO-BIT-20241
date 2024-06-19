//cSpell:disable
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
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

    @Input() idPeliculaConsulta: string = "";
    textoBoton: string = "Agregar Pelicula"

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
    regexAlfanumerico = /^[a-zA-Z0-9 ñÑ]+$/

    constructor(private fb: FormBuilder, private _consumoApi: ConsumoApiService) {
        this.peliculaForm = this.fb.group({
            titulo: ['', [
                Validators.required,
                Validators.minLength(3)
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

    ngOnChanges(changes: SimpleChanges) {
        if (this.idPeliculaConsulta != '') {
            if (changes['idPeliculaConsulta']) {
                this.alimentarFormulario(changes['idPeliculaConsulta'].currentValue)
                this.textoBoton = "Actualizar Pelicula"
            }
        }
    }

    alimentarFormulario(id: string) {
        this._consumoApi.getPelicula(id).subscribe((data: any) => {
            console.log(data)
            this.peliculaForm.get('titulo')?.setValue(data.titulo);
            this.peliculaForm.get('genero')?.setValue(data.genero);
            this.peliculaForm.get('hora')?.setValue(data.duracion.split(':')[0]);
            this.peliculaForm.get('minuto')?.setValue(data.duracion.split(':')[1]);
            this.peliculaForm.get('segundo')?.setValue(data.duracion.split(':')[2]);
            this.peliculaForm.get('director')?.setValue(data.director);
            this.peliculaForm.get('imagen')?.setValue(data.imagen);
            this.peliculaForm.get('clasificacion')?.setValue(data.clasificacion);
        })
    }

    envioFormulario() {
        console.log(this.peliculaForm.value);
        if (this.idPeliculaConsulta != '') {
            let info = {
                titulo: this.peliculaForm.get('titulo')?.value,
                genero: this.peliculaForm.get('genero')?.value,
                duracion: `${this.peliculaForm.get('hora')?.value}:${this.peliculaForm.get('minuto')?.value}:${this.peliculaForm.get('segundo')?.value}`,
                director: this.peliculaForm.get('director')?.value,
                imagen: this.peliculaForm.get('imagen')?.value,
                clasificacion: this.peliculaForm.get('clasificacion')?.value
            }

            this._consumoApi.putPelicula(this.idPeliculaConsulta, info).subscribe((data) => {
                Swal.fire({
                    title: "Pelicula actualizada",
                    icon: "success",
                    showConfirmButton: false
                });
                setTimeout(() => {
                    location.reload();
                }, 2500);
            })
        } else {
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
                        icon: "success",
                        showConfirmButton: false
                    });
                    setTimeout(() => {
                        location.reload();
                    }, 2500);
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

}
