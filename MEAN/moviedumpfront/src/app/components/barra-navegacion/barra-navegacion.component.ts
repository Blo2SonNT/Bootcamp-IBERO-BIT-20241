import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-barra-navegacion',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './barra-navegacion.component.html',
    styleUrl: './barra-navegacion.component.css'
})

export class BarraNavegacionComponent {
    tituloBanner:string = 'MovieDump';
    link:string = 'https://www.google.com/';
}
