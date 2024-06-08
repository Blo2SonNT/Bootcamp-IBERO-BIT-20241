import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        BarraNavegacionComponent,
        SidebarComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'moviedumpfront';
}
