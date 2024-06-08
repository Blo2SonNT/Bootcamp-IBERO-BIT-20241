import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    estiloLupa?: boolean = false
    mostrarElmentosNG16:boolean = false
    admin:boolean = true
    generos : any = [
        {_id: 15534, nombre: 'Acción'},
        {_id: 223423, nombre: 'Aventura'},
        {_id: 364634, nombre: 'Comedia'},
        {_id: 4234, nombre: 'Drama'},
        {_id: 5234, nombre: 'Fantasía'},
        {_id: 6234, nombre: 'Terror'},
        {_id: 722, nombre: 'Ciencia Ficción'},
        {_id: 833, nombre: 'Musical'}
    ]

    constructor() { }

    desaparecerLupa(estado:boolean){
        this.estiloLupa = estado
        console.log(this.estiloLupa);
    }

    elementosNG16(){
        this.mostrarElmentosNG16 = !this.mostrarElmentosNG16
    }
}
