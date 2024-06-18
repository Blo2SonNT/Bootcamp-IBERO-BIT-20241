//cSpell:disable
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsumoApiService } from '../../../services/consumo-api.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
    selector: 'app-formulario-generos',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: './formulario-generos.component.html',
    styleUrl: './formulario-generos.component.css'
})
export class FormularioGenerosComponent {

    @Input() idGeneroConsulta: string = "";

    formGeneros: FormGroup;

    constructor(private fb: FormBuilder, private _consumoApi: ConsumoApiService) {
        this.formGeneros = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.idGeneroConsulta != "") {
            this.idGeneroActualizacion(this.idGeneroConsulta);
        }
    }


    idGeneroActualizacion(id: string) {
        console.log('id obtenido en hijo:', id);
        this._consumoApi.getGenero(id).subscribe((data: any) => {
            console.log(data);
            this.formGeneros.get('nombre')?.setValue(data.nombre);
        })
    }

    enviarInformacion() {
        let erroresInputNombre: any = this.formGeneros.get('nombre')?.errors
        console.log('erroresInputNombre:', erroresInputNombre)

        if (erroresInputNombre == null) {
            this._consumoApi.postGeneros(this.formGeneros.value).subscribe((data) => {
                console.log(data);
                Swal.fire({
                    icon: "success",
                    title: "Genero creado de manera exitosa",
                    showConfirmButton: false,
                    timer: 2000
                });
                setTimeout(() => {
                    location.reload();
                }, 2000);
            });
        } else {
            Swal.fire({
                title: "Formulario Invalido",
                text: "Burro Bestia animal salvaje",
                icon: "error"
            });
        }
    }


}
